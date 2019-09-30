const assert = require("chai").assert;
const isPalindrome = require("../is-palindrome");

describe("palindrome test", () => {
  it("should return a boolean", () => {
    const result = isPalindrome("ava");
    assert.isBoolean(result);
  });

  it("should return true if given word is palindrome", () => {
    const result = isPalindrome("racecar");
    assert.strictEqual(result, true);
  });

  it("should return false if given word is not palindrome", () => {
    const result = isPalindrome("java");
    assert.strictEqual(result, false);
  });
});
