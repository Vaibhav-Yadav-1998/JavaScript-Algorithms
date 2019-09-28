const assert = require("chai").assert;
const vowelCounter = require("../vowel-counter.js");

describe("vowel-counter test", () => {
  it("should return a number", () => {
    const result = vowelCounter("javascript");
    assert.isNumber(result);
  });

  it("should return 0 if string contains no vowels", () => {
    const result = vowelCounter("xyz");
    assert.strictEqual(result, 0);
  });

  it("should take number as input and return 0", () => {
    const result = vowelCounter(23);
    assert.strictEqual(result, 0);
  });

  it("should return the number of vowels in the string", () => {
    const result = vowelCounter("javascript");
    assert.strictEqual(result, 3);
  });
});
