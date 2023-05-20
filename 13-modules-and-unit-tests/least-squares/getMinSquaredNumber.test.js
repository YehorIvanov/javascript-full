import getMinSquaredNumber from "./getMinSquaredNumber";

it("get min abs squared number", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(2);
});
it("get null if string", () => {
  const result = getMinSquaredNumber("svnj12");
  expect(result).toEqual(null);
});
it("get null if empty array", () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(undefined);
});
