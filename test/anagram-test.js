const assert = require("chai").assert;
const isAnagram = require("../anagram");

describe("anagram test", () => {
  it("should return a boolean", () => {
    const result = isAnagram("car", "rac");
    assert.isBoolean(result);
  });

  it("should return true if given words are anagram", () => {
    const result = isAnagram("finder", "friend");
    assert.strictEqual(result, true);
  });

  it("should return false if given words are not anagram", () => {
    const result = isAnagram("face", "case");
    assert.strictEqual(result, false);
  });
});
