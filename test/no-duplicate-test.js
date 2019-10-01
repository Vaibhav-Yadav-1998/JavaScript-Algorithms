const assert = require("chai").assert;
const noDuplicate = require("../no-duplicate");

describe("no-duplicate test", () => {
  it("should return an array", () => {
    const result = noDuplicate([2, 1, 1, 3, 5]);
    assert.isArray(result);
  });

  it("should return an array with no duplicate value", () => {
    const result = noDuplicate([2, 13, 3, 7, 13, 3, 98]);
    assert.strictEqual(5, result.length);
    assert.includeMembers([2, 13, 3, 7, 98], result);
  });
});
