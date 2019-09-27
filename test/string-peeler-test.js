const assert = require("chai").assert;
const stringPeeler = require("../string-peeler");

describe("string peeler test", () => {
  it("should return null if str length is <= 2", () => {
    const result = stringPeeler("ok");
    assert.isNull(result);
  });

  it("should return a string if str length is greater than 2", () => {
    const result = stringPeeler("javascript");
    assert.isString(result);
  });

  it("should return peeled string", () => {
    const result = stringPeeler("javascript");
    assert.strictEqual(result, "avascrip");
  });
});
