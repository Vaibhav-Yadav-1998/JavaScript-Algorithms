const assert = require("chai").assert;
const missingLetter = require("../missing-letter");

describe("missing letter test", () => {
  const result = missingLetter(["a", "b", "c", "d", "f"]);

  it("should return a string", () => {
    assert.isString(result);
  });

  it("should return only one character", () => {
    assert.strictEqual(result.length, 1);
  });

  it("should return the missing letter", () => {
    assert.strictEqual(result, "e");
  });
});
