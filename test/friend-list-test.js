const assert = require("chai").assert;
const friendList = require("../friend-list");

describe("friend list test", () => {
  it("should return a string", () => {
    const result = friendList(
      "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
    );
    assert.isString(result);
  });

  it("should return string in correct format", () => {
    const result = friendList(
      "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
    );
    const expected =
      "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)";
    assert.strictEqual(result, expected);
  });
});
