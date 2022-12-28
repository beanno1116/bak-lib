# bak-lib #

This is a small utility package to test npm

These are the current functions in the library

- [Append](#append)
- [Box](#box)
- [Compose](#compose)
- [Curry](#curry)
- [Maybe](#maybe)
- [prop](#prop)
- [Queue](#queue)
- [Stack](#stack)

## Append ##

```js
  expect(append("thing")("some")).toEqual("something");
```

## Box ##

this function can be used to map over complex data to filter out the results

```js
    const items = box(data)
      .map((x) => x.filter((i) => i.dept === 1))
      .map((x) => x.filter((i) => i.vendor === 1))
      .map((x) => x.filter((i) => i.category === 1))
      .map((x) => x.filter((i) => i.price > 2.0))
      .map((x) => x.filter((i) => i.price < 3.0))
      .fold((x) => x);
```

## Compose ##

This function is used to compose other functions in a chainable point free fashion

```js
  const addOne = (x) => x.map((y) => y + 1);
  const addTwo = (x) => x.map((y) => y + 2);

    const result = compose(addOne, addTwo);
    expect(result(arr)).toEqual([4, 5, 6, 7, 8, 9]);
```

## Curry ## 

This function can be used like Partial Applicatoin. You can lazily load arguments and when the function has received all the neccessary arguments, then it will run the function

```js
    const curriedSum = curry(sum);
    expect(curriedSum(4)(5)).toEqual(9);

    const curriedSum = curry(sum);
    const fn1 = curriedSum(4);
    const result = fn1(5);
    expect(result).toEqual(9);
```

## Prop ##

This function get a property from an object

```js
    const obj = { id: 1, name: "ben" };
    expect(prop("name")(obj)).toEqual("ben");

```

## Maybe ##

This modan can be used when a null value could be expexted from data recieved from server

```js
    const maybeNumberOne = Maybe.just(5);
    const maybeNumberTwo = Maybe.nothing();

    expect(maybeNumberOne.isNothing()).toBeFalsy();
    expect(maybeNumberTwo.isNothing()).toBeTruthy();
```

## Queue ##

This is a first in first out data structure

```js
  const queue = new Queue<string>();
    queue.enqueue("a");
    queue.enqueue("b");
    const result = queue.dequeue();
    expect(result).toEqual("a");
    expect(queue.size()).toEqual(1);
```

## Stack ##

this is a first in first out data structure

```js
   const stack = new Stack<string>();
    stack.push("a");
    expect(stack.size()).toEqual(1);
    expect(stack.peek()).toEqual("a");
    stack.pop();
    expect(stack.size()).toEqual(0);
```
