const assert = require("chai").assert;
const diamond = require("../diamond");

describe("diamond test", () => {
  it("should return null if given number is even", () => {
    const result = diamond(10);
    assert.isNull(result);
  });

  it("should return a string if given input is odd", () => {
    const result = diamond(7);
    assert.isString(result);
  });

  it("should return a diamond for valid input", () => {
    const result = diamond(5);
    assert.strictEqual(result, "  *  \n *** \n*****\n *** \n  *  ");
  });
});
