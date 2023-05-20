import getSum, { getOddNumbers, getSquaredArray } from "./calculator.js";

it("expect get squared array", () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});
it("expect get odd numbers", () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});
it("expect get sum of numbers", () => {
  const result = getSum(2, 3);
  expect(result).toEqual(5);
});
