import { append } from "../src";

describe("append", () => {
  test("Should apend two strings", () => {
    expect(append("thing")("some")).toEqual("something");
  });
});
