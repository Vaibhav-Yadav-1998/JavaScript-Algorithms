const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const bubbleSort = require("../bubble-sort");

chai.use(require("chai-sorted"));

describe("bubble sort test", () => {
  it("should return an array", () => {
    const result = bubbleSort([6, 3, 4, 10, 7]);
    assert.isArray(result);
  });

  it("should return sorted array", () => {
    const result = bubbleSort([6, 3, 4, 10, 7]);
    expect(result).to.be.sorted({ descending: false });
  });
});
