import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: {...globals.node,
    process:"readonly"
   }}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
    rules: {
      //  "perfect-const": "error",
      "no-unused-vars": "error",
      // "no-unused-expressions":"error",
      // "perfect-const":"error",
      // "no-console":"warn",
      // "no-unfef":"error",
    },
  },
];