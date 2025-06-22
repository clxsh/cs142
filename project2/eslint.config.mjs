import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended", "eslint-config-airbnb-base"),

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: 5,
        sourceType: "script",
    },

    rules: {
        "no-console": 0,

        "no-empty": ["error", {
            allowEmptyCatch: true,
        }],

        "no-restricted-syntax": ["error", {
            selector: "WithStatement",
            message: "`with` is disallowed in strict mode.",
        }],

        "no-unused-vars": ["error", {
            vars: "all",
            varsIgnorePattern: "cs142MakeMultiFilter|Cs142TemplateProcessor",
            args: "after-used",
            ignoreRestSiblings: true,
        }],

        "no-var": 0,
        strict: ["error", "safe"],
        "arrow-parens": 0,
        "brace-style": 0,
        camelcase: 0,
        "func-names": 0,
        "no-continue": 0,
        "no-else-return": 0,
        "no-param-reassign": 0,
        "no-plusplus": 0,
        quotes: 0,
        "vars-on-top": 0,
        "block-spacing": 0,
        "comma-spacing": 0,
        "eol-last": 0,
        "func-call-spacing": 0,
        indent: 0,
        "keyword-spacing": 0,
        "linebreak-style": 0,
        "lines-around-directive": 0,
        "lines-between-class-members": 0,
        "no-mixed-spaces-and-tabs": 0,
        "no-multi-spaces": 0,
        "no-multiple-empty-lines": 0,
        "no-spaced-func": 0,
        "no-tabs": 0,
        "no-trailing-spaces": 0,
        "object-curly-spacing": 0,
        "operator-linebreak": 0,
        "padded-blocks": 0,
        "space-before-blocks": 0,
        "semi-spacing": 0,
        "space-before-function-paren": 0,
        "space-in-parens": 0,
        "space-infix-ops": 0,
        "space-unary-ops": 0,
        "spaced-comment": 0,
        "unicode-bom": 0,
        "object-shorthand": 0,
        "prefer-arrow-callback": 0,
        "prefer-destructuring": 0,
        "prefer-template": 0,
    },
}]);