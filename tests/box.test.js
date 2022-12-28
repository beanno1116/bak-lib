import { box } from "../src";
import { data } from "./data";

describe("box", () => {
  test("should get all items between 2 and 3 dollars", () => {
    const items = box(data)
      .map((x) => x.filter((i) => i.dept === 1))
      .map((x) => x.filter((i) => i.vendor === 1))
      .map((x) => x.filter((i) => i.category === 1))
      .map((x) => x.filter((i) => i.price > 2.0))
      .map((x) => x.filter((i) => i.price < 3.0))
      .fold((x) => x);

    expect(items).toEqual([
      {
        id: 2,
        upc: 2,
        description: "pepsi",
        price: 2.4,
        dept: 1,
        category: 1,
        vendor: 1,
      },
      {
        id: 3,
        upc: 3,
        description: "Mt Dew",
        price: 2.65,
        dept: 1,
        category: 1,
        vendor: 1,
      },
    ]);
  });

  test("should return array of item descriptions", () => {
    const items = box(data)
      .map((x) => x.filter((i) => i.price > 2.0))
      .map((x) => x.filter((i) => i.price < 3.0))
      .map((x) => x.map((y) => y.description))
      .chain((x) => x);

    expect(items).toEqual(["pepsi", "Mt Dew"]);
  });
});
