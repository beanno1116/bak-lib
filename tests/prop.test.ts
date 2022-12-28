import { prop } from "../src";

describe("prop", () => {
  const obj = {
    id: 1,
    name: "ben",
  };
  test("should get a property from an object", () => {
    const obj = { id: 1, name: "ben" };
    expect(prop("name")(obj)).toEqual("ben");
  });
  test("should get a property in two steps", () => {
    const fn1 = prop("name");
    const result = fn1(obj);
    expect(result).toEqual("ben");
  });
});
