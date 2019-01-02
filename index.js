"use strict";

module.exports = {
  extends: "eslint:recommended",
  env: {
    es6: true, // Register ES2015 globals
    node: true
  },
  parserOptions: { ecmaVersion: 2018 },
  plugins: ["import"],
  rules: {
    "array-bracket-spacing": ["error", "never"],
    "block-scoped-var": "error",
    "arrow-spacing": ["error", { before: true, after: true }],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: []
      }
    ],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "error",
    curly: ["error", "multi-line"],
    "default-case": ["error", { commentPattern: "^no default$" }],
    "dot-notation": ["error", { allowKeywords: true }],
    "dot-location": ["error", "property"],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-style": ["error", "declaration"],
    "generator-star-spacing": ["error", { before: false, after: true }],
    "getter-return": ["error", { allowImplicit: true }],
    "guard-for-in": "error",
    "import/export": "error",
    "import/extensions": [
      "error",
      "always",
      {
        js: "never"
      }
    ],
    "import/first": ["error", "absolute-first"],
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-duplicates": "error",
    "import/no-dynamic-require": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/test/**/*.js", "gulpfile.js", "scripts/**/*.js"]
      }
    ],
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/prefer-default-export": "error",
    "key-spacing": "error",
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],
    "linebreak-style": ["error", "unix"],
    "lines-around-directive": [
      "error",
      {
        before: "always",
        after: "always"
      }
    ],
    "max-depth": ["error", 4],
    "max-len": [
      "error",
      120,
      {
        ignoreUrls: true
      }
    ],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"]
      }
    ],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-cond-assign": ["error", "always"],
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true
      }
    ],
    "no-else-return": ["error", { allowElseIf: true }],
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"]
      }
    ],
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        allowSamePrecedence: true
      }
    ],
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-path-concat": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated"
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead"
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead"
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead"
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead"
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead."
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead."
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead."
      }
    ],
    "no-return-assign": ["error", "except-parens"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false
      }
    ],
    "no-undef-init": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-unused-vars": ["error", { vars: "all", args: "none" }],
    "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    "no-useless-return": "error",
    "no-whitespace-before-property": "error",
    "no-var": "error",
    "no-void": "error",
    "no-with": "error",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      {
        allowMultiplePropertiesPerLine: true
      }
    ],
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "always"],
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true
      }
    ],
    "prefer-numeric-literals": "error",
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    "prefer-spread": "error",
    "quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],
    quotes: ["error", "single", { avoidEscape: true }],
    radix: "error",
    "rest-spread-spacing": ["error", "never"],
    semi: ["error", "always"],
    "semi-spacing": ["error", { before: false, after: true }],
    "semi-style": ["error", "last"],
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ],
    strict: ["error", "safe"],
    "switch-colon-spacing": ["error", { after: true, before: false }],
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "valid-typeof": ["error", { requireStringLiterals: true }],
    "vars-on-top": "error",
    "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],
    "yield-star-spacing": ["error", "after"],
    yoda: "error"
  },
  overrides: [{ files: "**/test/**", env: { mocha: true } }]
};
