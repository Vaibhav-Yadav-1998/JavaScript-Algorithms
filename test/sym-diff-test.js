const assert = require("chai").assert;
const sym = require("../symmetric-difference");

describe("symmetric difference of array", () => {
  it("should return an array", () => {
    const result = sym([1, 2, 3], [5, 2, 1, 4]);
    assert.isArray(result);
  });

  it("should return array which contain 3, 4 and 5", () => {
    const result = sym([1, 2, 3], [5, 2, 1, 4]);
    assert.deepEqual(result, [3, 4, 5]);
  });

  it("should return array which contain 1, 4 and 5", () => {
    const result = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
    assert.deepEqual(result, [1, 4, 5]);
  });
});
