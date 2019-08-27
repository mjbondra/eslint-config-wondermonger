"use strict";

module.exports = {
  rules: {
    // disallow camelcase variables with exceptions for destructured and assigned object properties
    camelcase: [
      "error",
      {
        properties: "never",
        ignoreDestructuring: true
      }
    ],

    // disallow use of the continue statement
    "no-continue": "error",

    // disallow if as the only statement in an else block
    "no-lonely-if": "error",

    // disallow nested ternary expressions
    "no-nested-ternary": "error",

    // disallow dangling underscores in identifiers
    "no-underscore-dangle": "error",

    // require assignment operator shorthand where possible
    "operator-assignment": ["error", "always"]
  }
};
