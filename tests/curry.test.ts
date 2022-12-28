import { curry, sum } from "../src";

describe("curry", () => {
  test("shoud run a curry funciont", () => {
    const curriedSum = curry(sum);
    expect(curriedSum(4)(5)).toEqual(9);
  });
});
