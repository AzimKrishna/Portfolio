import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Kept from old config, changed 'off' to 'warn'
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add node globals as well for Next.js server-side parts
      }
    }
  }
];

export default eslintConfig;