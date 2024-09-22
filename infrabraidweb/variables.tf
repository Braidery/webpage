
# Variables
variable "tenant_id" {

  description = "The Tenant ID for Azure"

  type        = string

}
variable "location" {
  description = "Azure region to deploy resources"
  default     = "norwayeast"
}

variable "domain_name" {
  description = "The custom domain name for your application"
  default     = "braidery.com"
}

variable "azure_devops_organization" {
  description = "The name of your Azure DevOps organization"
  default =   "https://dev.azure.com/FrueScGamman/" 
}

variable "azure_devops_project_name" {
  description = "The name of your existing Azure DevOps project"
  default =  "braidery"
}

variable "azure_devops_repo_name" {
  description = "The name of your Azure DevOps repository"
  default =     "https://dev.azure.com/FrueScGamman/_git/webpage"
}
variable "service_principal_object_id" {

  description = "The object ID of the service principal"

  type        = string

}