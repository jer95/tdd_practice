const caesarCipher = require("../code/caesarCipher.js");

describe("shifts each character in string by shift factor", () => {
  it("shifts each character in string by shift factor", () => {
    const string = "xyz";
    const shift = 3;
    const actual = caesarCipher(string, shift);
    const expected = "abc";
    expect(actual).toEqual(expected);
  });

  it("preserves case sensitivity ", () => {
    const string = "XyZ";
    const shift = 3;
    const actual = caesarCipher(string, shift);
    const expected = "AbC";
    expect(actual).toEqual(expected);
  });

  it("Doesn't modify non alphabet characters", () => {
    const string = "Hello, World!";
    const shift = 3;
    const actual = caesarCipher(string, shift);
    const expected = "Khoor, Zruog!";
    expect(actual).toEqual(expected);
  });
});
