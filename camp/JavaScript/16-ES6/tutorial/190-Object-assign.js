const a = { x: 10 };
const b = { x: 20, y: 30 };
const target = {};

Object.assign(target, a, b);

console.log(target); // { x: 20, y: 30 }
