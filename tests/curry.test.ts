import { curry, sum } from "../src";

describe("curry", () => {
  test("shoud run a curry funciont", () => {
    const curriedSum = curry(sum);
    expect(curriedSum(4)(5)).toEqual(9);
  });

  test("should be able to accept arguements seperatley", () => {
    const curriedSum = curry(sum);
    const fn1 = curriedSum(4);
    const result = fn1(5);
    expect(result).toEqual(9);
  });
});
