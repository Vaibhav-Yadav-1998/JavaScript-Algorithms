const assert = require("chai").assert;
const capitalize = require("../capitalize");

describe("capitalize test", () => {
  it("should return an array", () => {
    const result = capitalize(["javascript", "java", "python"]);
    assert.isArray(result);
  });

  it("should return an array where all strings are capitalized", () => {
    const result = capitalize(["javascript", "JAVA", "pytHon"]);
    assert.strictEqual(3, result.length);
    assert.includeMembers(["Javascript", "Java", "Python"], result);
  });
});
