const calculator = require("../code/calculator.js");

describe("returns the correct calculation", () => {
  it("adds two numbers correctly", () => {
    const num1 = 4;
    const num2 = 2;
    const actual = calculator.add(num1, num2);
    const expected = num1 + num2;
    expect(actual).toEqual(expected);
  });

  it("subtracts two numbers correctly", () => {
    const num1 = 6;
    const num2 = 3;
    const actual = calculator.subtract(num1, num2);
    const expected = num1 - num2;
    expect(actual).toEqual(expected);
  });

  it("multiplies two numbers correctly", () => {
    const num1 = 5;
    const num2 = 2;
    const actual = calculator.multiply(num1, num2);
    const expected = num1 * num2;
    expect(actual).toEqual(expected);
  });

  it("divides two numbers correctly", () => {
    const num1 = 10;
    const num2 = 2;
    const actual = calculator.divide(num1, num2);
    const expected = num1 / num2;
    expect(actual).toEqual(expected);
  });
});
