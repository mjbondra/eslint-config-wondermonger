"use strict";

const chai = require("chai");
const dirtyChai = require("dirty-chai");
const requireDir = require("require-dir");

const config = require("../../lib");
const scriptConfig = require("../../lib/script");

const modules = requireDir("../../lib/rules");

const names = Object.keys(modules);
const { expect } = chai;

chai.use(dirtyChai);

describe("eslint-config-wondermonger", () => {
  describe("config", () => {
    it("should extend every rule", () => {
      names.forEach(name => {
        expect(config.extends).to.include(`./rules/${name}.js`);
      });
    });
  });

  describe("script config", () => {
    it("should extend config for scripts", () => {
      expect(scriptConfig.extends).to.include("./index.js");
      expect(scriptConfig.parserOptions.sourceType).to.equal("script");
    });
  });

  describe("rules", () => {
    const rules = names
      .map(name => modules[name].rules)
      .filter(val => !!val)
      .reduce((result, current) => result.concat(current), []);

    const values = ["error", "off", "warn"]; // do not allow numeric values

    it('should always have "error", "off", or "warn" as a value', () => {
      rules.forEach(set => {
        Object.keys(set).forEach(prop => {
          if (Array.isArray(set[prop])) {
            expect(values).to.include(set[prop][0], prop);
          } else {
            expect(values).to.include(set[prop], prop);
          }
        });
      });
    });
  });
});
