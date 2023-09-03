// if bitfields are not needed, make an object instead.
/*
https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
The biggest argument in favour of this format over TypeScript’s enum is that it keeps your codebase aligned with the state of JavaScript, and when/if enums are added to JavaScript then you can move to the additional syntax.
*/
export const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
/*
// It requires an extra line to pull out the values
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

run(ODirection.Right);
*/