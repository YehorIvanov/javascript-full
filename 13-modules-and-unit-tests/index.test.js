const getEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);
it("", () => {
  expect(17).toEqual(17);
});
it("", () => {
  expect(18).not.toEqual(17);
});
it("get only even numbers from array", () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([2, 4, 6]);
});
