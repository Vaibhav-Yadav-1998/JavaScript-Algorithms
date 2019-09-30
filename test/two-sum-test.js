const assert = require("chai").assert;
const twoSum = require("../two-sum");

describe("two sum test", () => {
  it("should return an array of two indices if the given array satisfies the condition", () => {
    const arr = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(arr, target);
    assert.strictEqual(arr[result[0]] + arr[result[1]], target);
  });

  it("should return false if given array doesn't satisfies the condition", () => {
    const arr = [1, 34, 35, 7];
    const target = 10;
    const result = twoSum(arr, target);
    assert.strictEqual(result, false);
  });
});
