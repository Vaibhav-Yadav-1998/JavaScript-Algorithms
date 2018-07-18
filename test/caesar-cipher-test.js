const assert = require("chai").assert;
const cipher = require("../caesar-cipher");

describe("caesar cipher test", () => {
  it("should return a string", () => {
    const result = cipher("card");
    assert.isString(result);
  });

  it("should return fdug", () => {
    const result = cipher("card");
    assert.strictEqual(result, "fdug");
  });

  it("should return FDUG", () => {
    const result = cipher("CARD");
    assert.strictEqual(result, "FDUG");
  });

  it("should return Cheud Furvvlqj", () => {
    const result = cipher("Zebra Crossing");
    assert.strictEqual(result, "Cheud Furvvlqj");
  });
});
