const assert = require("chai").assert;
const camelCase = require("../camel-case");

describe("camel case test", () => {
  it("should return a string", () => {
    const result = camelCase("hello world");
    assert.isString(result);
  });

  it("should return string in camel case", () => {
    const result = camelCase("camel case word");
    assert.strictEqual(result, "CamelCaseWord");
  });
});
