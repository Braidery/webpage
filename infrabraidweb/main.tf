# main.tf

# Providers
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.64.0"
    }
  }
}

provider "azurerm" {
  features {}
}

provider "azuredevops" {
  org_service_url       = "https://dev.azure.com/${var.azure_devops_organization}"
  personal_access_token = data.azurerm_key_vault_secret.azuredevops_pat.value
}

# Data Sources
data "azurerm_client_config" "current" {}

data "azuredevops_project" "existing_project" {
  name = var.azure_devops_project_name
}

# If your repository is hosted in Azure Repos Git
data "azuredevops_git_repository" "existing_repo" {
  project_id = data.azuredevops_project.existing_project.id
  name       = var.azure_devops_repo_name
}

# Key Vault
resource "azurerm_key_vault_access_policy" "pipeline" {
  key_vault_id = azurerm_key_vault.braidery.id
  tenant_id    = var.tenant_id
  object_id    = var.service_principal_object_id

  secret_permissions = ["get", "list"]
  certificate_permissions = ["get", "list"]
}

resource "azurerm_key_vault" "braidery" {
  name                = "braidery-keyvault"
  location            = azurerm_resource_group.braidery.location
  resource_group_name = azurerm_resource_group.braidery.name
  tenant_id           = data.azurerm_client_config.current.tenant_id
  sku_name            = "standard"

  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id

    secret_permissions       = ["get", "list", "set", "delete"]
    certificate_permissions  = ["get", "list", "create", "delete", "import", "update", "managecontacts", "getissuers", "listissuers", "setissuers", "deleteissuers", "manageissuers", "recover", "purge"]
  }
}

# Azure DevOps PAT stored in Key Vault
data "azurerm_key_vault_secret" "azuredevops_pat" {
  name         = "azuredevops-pat"
  key_vault_id = azurerm_key_vault.braidery.id
}

# Resource Group
resource "azurerm_resource_group" "braidery" {
  name     = "braidery-resources"
  location = var.location
}

# Random Passwords
resource "random_password" "acr_password" {
  length  = 16
  special = true
}

resource "random_password" "cert_password" {
  length  = 16
  special = true
}

# Store Generated Secrets in Key Vault
resource "azurerm_key_vault_secret" "acr_password" {
  name         = "acr-password"
  value        = random_password.acr_password.result
  key_vault_id = azurerm_key_vault.braidery.id
}

resource "azurerm_key_vault_secret" "cert_password" {
  name         = "cert-password"
  value        = random_password.cert_password.result
  key_vault_id = azurerm_key_vault.braidery.id
}

# Container Registry
resource "azurerm_container_registry" "braidery" {
  name                = "braideryacr"
  location            = azurerm_resource_group.braidery.location
  resource_group_name = azurerm_resource_group.braidery.name
  sku                 = "Basic"
  admin_enabled       = true
}

# App Service Plan
resource "azurerm_app_service_plan" "braidery" {
  name                = "braidery-appserviceplan"
  location            = azurerm_resource_group.braidery.location
  resource_group_name = azurerm_resource_group.braidery.name

  sku {
    tier = "Standard"
    size = "S1"
  }
}

# App Service
resource "azurerm_app_service" "braidery" {
  name                = "braidery-appservice"
  location            = azurerm_resource_group.braidery.location
  resource_group_name = azurerm_resource_group.braidery.name
  app_service_plan_id = azurerm_app_service_plan.braidery.id

  site_config {
    linux_fx_version = "DOCKER|${azurerm_container_registry.braidery.login_server}/braidery-app:latest"
  }

  app_settings = {
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = "false"
    DOCKER_REGISTRY_SERVER_URL          = "https://${azurerm_container_registry.braidery.login_server}"
    DOCKER_REGISTRY_SERVER_USERNAME     = azurerm_container_registry.braidery.admin_username
    DOCKER_REGISTRY_SERVER_PASSWORD     = azurerm_key_vault_secret.acr_password.value
  }
}

# DNS Zone and Records
resource "azurerm_dns_zone" "braidery" {
  name                = var.domain_name
  resource_group_name = azurerm_resource_group.braidery.name
}

resource "azurerm_dns_cname_record" "braidery" {
  name                = "www"
  zone_name           = azurerm_dns_zone.braidery.name
  resource_group_name = azurerm_resource_group.braidery.name
  ttl                 = 300
  record              = azurerm_app_service.braidery.default_site_hostname
}

# Custom Hostname Binding
resource "azurerm_app_service_custom_hostname_binding" "braidery" {
  hostname            = "www.${var.domain_name}"
  app_service_name    = azurerm_app_service.braidery.name
  resource_group_name = azurerm_resource_group.braidery.name
}

# SSL Certificate Creation and Binding via Key Vault
# Create a Certificate in Key Vault
resource "azurerm_key_vault_certificate" "braidery_cert" {
  name         = "braidery-cert"
  key_vault_id = azurerm_key_vault.braidery.id

  certificate_policy {
    key_properties {
      exportable = true
      key_size   = 2048
      key_type   = "RSA"
      reuse_key  = true
    }

    secret_properties {
      content_type = "application/x-pkcs12"
    }

    x509_certificate_properties {
      subject            = "CN=www.${var.domain_name}"
      validity_in_months = 12
      key_usage          = ["digitalSignature", "keyEncipherment"]
    }

    lifetime_action {
      action {
        action_type = "AutoRenew"
      }

      trigger {
        days_before_expiry = 30
      }
    }

    issuer_parameters {
      name = "Self"
    }
  }
}

# Create App Service Certificate Resource
resource "azurerm_app_service_certificate" "braidery" {
  name                = "braidery-cert"
  resource_group_name = azurerm_resource_group.braidery.name
  location            = azurerm_resource_group.braidery.location
  key_vault_secret_id = azurerm_key_vault_certificate.braidery_cert.secret_id
}

# Bind the Certificate to App Service
resource "azurerm_app_service_certificate_binding" "braidery" {
  hostname_binding_id = azurerm_app_service_custom_hostname_binding.braidery.id
  ssl_state           = "SniEnabled"
  certificate_id      = azurerm_app_service_certificate.braidery.id
}

# Azure DevOps Service Endpoint
resource "azuredevops_serviceendpoint_azurecr" "braidery" {
  project_id            = data.azuredevops_project.existing_project.id
  service_endpoint_name = "braidery-acr"

  azurecr_spn {
    service_principal_id  = data.azurerm_client_config.current.client_id
    service_principal_key = azurerm_key_vault_secret.acr_password.value
    tenant_id             = data.azurerm_client_config.current.tenant_id
    subscription_id       = data.azurerm_client_config.current.subscription_id
  }

  registry = azurerm_container_registry.braidery.login_server
}

# Azure DevOps Build Definition
resource "azuredevops_build_definition" "braidery" {
  project_id = data.azuredevops_project.existing_project.id
  name       = "braidery-build"

  ci_trigger {
    use_yaml = true
  }

  repository {
    repo_type   = "TfsGit"  # For Azure Repos Git
    repo_id     = data.azuredevops_git_repository.existing_repo.id
    branch_name = "main"
    yml_path    = "azure-pipelines.yml"
  }
}

