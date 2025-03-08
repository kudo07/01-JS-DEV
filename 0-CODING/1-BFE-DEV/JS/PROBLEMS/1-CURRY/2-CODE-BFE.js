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
    }
    return function (...next) {
      return curried.call(this, ...args, ...next);
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
