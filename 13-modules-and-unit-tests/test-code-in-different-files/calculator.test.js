import { getSquaredArray} from "./calculator.js";
import { getOddNumbers } from "calculator.js";
import getSum from "calculator.js";

it("expect get squared array", () => {
    const result = getSquaredArray([1,2,3,]);
    expect(result).toEqual([1,4,9,])
});
