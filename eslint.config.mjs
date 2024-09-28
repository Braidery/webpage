import globals from "globals";
import pluginJs from "eslint-plugin-js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      // Add any additional language options here if needed
    },
    plugins: {
      react: pluginReact,
      // Add any additional plugins here if needed
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      indent: ["error", 2], // Enforce 2 spaces indentation
      "space-before-function-paren": ["error", "never"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the version of React
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
