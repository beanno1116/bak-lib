import { data } from "../tests/data";
import { box } from "../src/box";
import { Maybe, prop, append, trace } from "../src";

const items = box(data)
  .map((x) => x.filter((i) => i.dept === 1))
  .map((x) => trace("after department")(x))
  .map((x) => x.filter((i) => i.vendor === 1))
  .map((x) => x.filter((i) => i.category === 1))
  .map((x) => x.filter((i) => i.price > 2.0))
  .map((x) => trace("'After > 2")(x))
  .map((x) => x.filter((i) => i.price < 3.0))
  .map((x) => trace("'After < 3")(x))
  .fold((x) => x);

console.log(items);

const badInput = Maybe.just({});
console.log(badInput.extract());

const appendC = Maybe.chain(prop("b"), prop("c"), append(" is great"));
const goodInput = Maybe.just({
  b: {
    c: "fp",
  },
});

const result = appendC(badInput);
console.log(appendC(goodInput).extract());

console.log(result.extract);
