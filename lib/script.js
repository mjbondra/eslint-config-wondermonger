"use strict";

module.exports = {
  extends: ["./index.js"],
  parserOptions: {
    sourceType: "script"
  },
  rules: {
    "import/no-commonjs": "off",
    strict: ["error", "global"]
  }
};
