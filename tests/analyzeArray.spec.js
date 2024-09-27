const analyzeArray = require("../code/analyzeArray.js");

describe("takes an array & returns an object with properties:avg,min,max,length", () => {
  it("returns an object with the correct properties of the array", () => {
    const arr = [4, 3, 6, 8, 9, 2];
    const actual = analyzeArray(arr);
    const expected = { average: 32 / 6, min: 2, max: 9, length: arr.length };
    expect(actual).toEqual(expected);
  });

  it("array contains non number value", () => {
    const arr = [6, 8, 3, 6, 4, "a"];
    const actual = analyzeArray(arr);
    const expected = "array contains non number value";
    expect(actual).toEqual(expected);
  });
});
