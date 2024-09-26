const reverseStr = require("../code/reverseStr.js");

describe("reverses a string", () => {
  it("reverses a string", () => {
    const string = "Coding";
    const actual = reverseStr(string);
    const expected = "gnidoC";
    expect(actual).toEqual(expected);
  });

  it("reverses a string with multiple words", () => {
    const string = "Coding is fun but can be hard at times.";
    const actual = reverseStr(string);
    const expected = ".semit ta drah eb nac tub nuf si gnidoC";
    expect(actual).toEqual(expected);
  });
});
