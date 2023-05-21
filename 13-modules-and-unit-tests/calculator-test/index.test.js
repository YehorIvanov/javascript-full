import { calc } from "./calculator";

it("get 2 + 2", () => {
  const result = calc("2 + 2");
  expect(result).toEqual("2 + 2 = 4");
});

it("get 2 * 2", () => {
  const result = calc("2 * 2");
  expect(result).toEqual("2 * 2 = 4");
});

it("get 2 / 2", () => {
  const result = calc("2 / 2");
  expect(result).toEqual("2 / 2 = 1");
});

it("get 2 - 2", () => {
  const result = calc("2 - 2");
  expect(result).toEqual("2 - 2 = 0");
});

it("undefinded operator", () => {
  const result = calc("2 % 2");
  expect(result).toEqual("2 % 2 = undefined");
});

it("not a string", () => {
  const result = calc(4);
  expect(result).toEqual(null);
});
