'use strict';

const path = require('path');

function withProjectRootPath(relativePath) {
  return path.join(__dirname, relativePath);
}

module.exports = {
  "extends": "eslint-config-airbnb",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "parser": "babel-eslint",
  "rules": {
    //
    // Safety
    //
    "no-unused-vars": "warn",
    "no-alert": "warn",
    "no-console": "warn",
    "no-use-before-define": "warn",
    "no-var": "warn",
    "block-scoped-var": "warn",
    "guard-for-in": "off",
    "no-shadow": "warn",
    "no-param-reassign": "off",

    //
    // Coding style
    //
    "indent": [ "warn", 2, { "SwitchCase": 1 } ],
    "padded-blocks": "off",
    "spaced-comment": "warn",
    "comma-dangle": [ "warn", "always-multiline" ],
    "space-in-parens": "off",
    "curly": [ "off", "all" ],
    "array-bracket-spacing": [ "warn", "always" ],
    "object-curly-spacing": [ "warn", "always" ],
    "computed-property-spacing": "off",
    "brace-style": [ "warn", "stroustrup", { "allowSingleLine": true } ],
    "no-trailing-spaces": [ "warn", { "skipBlankLines": true } ],
    "linebreak-style": [ "warn", "unix" ],
    "no-multiple-empty-lines": [ "warn", { "max": 2, "maxEOF": 1 } ],
    "eol-last": [ "error", "unix" ],
    "id-length": [ "warn", { "min": 2, "exceptions": [ "_", "$", "i", "j", "k", "x", "y", "e", "t" ] } ],
    "camelcase": "warn",
    "func-names": "warn",
    "keyword-spacing": "warn",
    "space-before-blocks": "warn",
    "space-before-function-paren": [ "warn", { "anonymous": "always", "named": "never" } ],
    "quotes": [ "warn", "single", "avoid-escape" ],
    "no-multi-spaces": [ "warn", { "exceptions": { "VariableDeclarator": true, "ImportDeclaration": true } } ],
    "dot-notation": "off",
    "prefer-template": "off",
    "prefer-arrow-callback": "warn",
    "max-len": [ "warn", 250, 4, { "ignoreComments": true } ],
    "arrow-parens": [ "warn", "always" ],
    "arrow-body-style": "off",
    "object-shorthand": "off",
    "no-case-declarations": "warn",
    "no-nested-ternary": "off",
    "global-require": "off",
    "no-underscore-dangle": "off",
    "no-useless-concat": "off",
    "no-mixed-operators": "off",
    "no-bitwise": "off",
    "no-plusplus": "off",
    "no-continue": "off",
    "newline-per-chained-call": "off",
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "lines-around-directive": "off",
    "class-methods-use-this": "off",

    //
    // React:
    //
    "react/prop-types": "warn",
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/forbid-component-props": [ "off", { "forbid": [ "className", "style" ] } ],
    "react/no-unused-prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [ "warn", { "extensions": [ ".js", ".jsx" ] } ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-quotes": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-tag-spacing": "warn",
    "react/jsx-curly-spacing": "off",
    "react/jsx-indent": "off",
    "react/self-closing-comp": [ "warn", { "component": true, "html": false } ],
    "react/no-multi-comp": "off",
    "react/sort-comp": "off",
    "react/prefer-stateless-function": "warn",
    "react/no-children-prop": "off",
    "react/no-danger-with-children": "error",

    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "jsx-a11y/no-static-element-interactions": "off",

    "jsx-quotes": "error",

    //
    // ES6:
    //
    "import/first": "off",
    "import/default": "off",
    "import/no-duplicates": "error",
    "import/named": "error",
    "import/namespace": [ "error", { "allowComputed": false } ],
    "import/no-extraneous-dependencies": [ "error", {
      "devDependencies": true
    } ],
    "import/newline-after-import": "off",
    "import/imports-first": "off",
    "import/no-unresolved": [ "error", {} ],
    "import/no-named-as-default": "error",
    "import/extensions": [ "warn", "always", { "": "never", "js": "never" } ],
    "import/no-deprecated": "warn",
  },
  "plugins": [
    "react",
    "import",
  ],
  "settings": {
    "import/ignore": [
      "node_modules",
      "\\.(scss|less|css)$",
    ],
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
        ],
      },
    },
  },
  "globals": {
    "__CLIENT__": true,
    "__SERVER__": true,
    "__DEVELOPMENT__": true,
    "__TEST__": true,
  },
};