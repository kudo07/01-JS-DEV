// function curry(fn) {
//   return function curried(...args) {
//     // if number of arguments match
//     if (args.length >= fn.length) {
//       //   console.log(this);

//       return fn.call(...args);
//     }
//     // just return a bounded curried() with args pre-filled
//     return curried.bind(...args);
//   };
// }
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.call(this, ...args);
      // this is used here
    }
    return function (...next) {
      return curried.call(this, ...args, ...next);
      // this is preserved here
    };
  };
}
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3));
// Execution Flow
// curriedJoin(1) is called.
// args = [1], not enough arguments.
// Returns a new function.
// The new function is then called with (2, 3).
// missingArgs = [2, 3].
// Calls curried.call(this, ...args, ...missingArgs), so now:
// args = [1, 2, 3].
// Still, this is undefined.
// this pointing to the new funciton
