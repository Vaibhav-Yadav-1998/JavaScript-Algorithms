const assert = require("chai").assert;
const isLeapYear = require("../leap-year");

describe("leap year test", () => {
  it("should return a boolean", () => {
    const result = isLeapYear(2019);
    assert.isBoolean(result);
  });

  it("should return true if it is a leap year", () => {
    const result = isLeapYear(2020);
    assert.strictEqual(result, true);
  });

  it("should return false if it is not a leap year", () => {
    const result = isLeapYear(1900);
    assert.strictEqual(result, false);
  });
});
