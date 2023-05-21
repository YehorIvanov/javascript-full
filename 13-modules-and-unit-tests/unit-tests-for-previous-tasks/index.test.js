import { reverseArray, withdraw, getAdults } from "./index.js";

it("get reversed array", (arr1 = [1, 2, 3, 4]) => {
  const result = reverseArray(arr1);
  expect(result).toEqual([4, 3, 2, 1]);
});

it("get null if not array", (arr1 = "") => {
  const result = reverseArray(arr1);
  expect(result).toEqual(null);
});

it("get input array without changes", (arr1 = [1, 2, 3, 4]) => {
  const result = reverseArray(arr1);
  expect(arr1).toEqual([1, 2, 3, 4]);
});

it("get balance after withdraw", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result).toEqual(37);
});

it("expect -1 , not enought money in the account", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(result).toEqual(-1);
});

it("expect 0 ", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ann", 1400);
  expect(result).toEqual(0);
});

it("get adults user, expect bob John Doe ", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("get adults user,expect  ann 56", () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it("expect empty object", () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
