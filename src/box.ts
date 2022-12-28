export const box = <T>(x: T[]) => ({
  map: (f: Function) => box(f(x)),
  inspect: `Box(${JSON.stringify(x)})`,
  fold: (f: Function) => f(x),
  chain: (f: Function) => f(x),
});
