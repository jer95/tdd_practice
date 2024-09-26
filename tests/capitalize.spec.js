const capitalize = require("../code/capitalize.js");

describe("capitalize", () => {
  it("capitalizes only first letter of string", () => {
    const string = "test";
    const actual = capitalize(string);
    const expected = "Test";
    expect(actual).toEqual(expected);
  });
});
