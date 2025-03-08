// // code working for this
// // curry(1,2,3,4)
// function curry(fn) {
//   return function curriedFunc(...args) {
//     console.log(fn.length, args.length);
//     console.log(args);
//     console.log(fn);

//     if (args.length >= fn.length) {
//       return fn(...args);
//       //   sumcurry(1,2,3)
//       // ignore 4
//     } else {
//       return function (...next) {
//         console.log(args.length);
//         return curriedFunc(...args, ...next);
//       };
//     }
//   };
// }
// const sumCurry = (a, b, c) => a + b + c;
// const totalSum = curry(sumCurry);
// console.log(totalSum(1, 2, 3, 4));
// fn is sumcurry which expects 3 arguments a,b,c

// 1+2+3
// args:[1,2,3,4]
// args.length= 4
// the rest operator (...args) collects multiple arguments into an array.

// 4
// fn.length==> a,b,c==>3
// args.length==>a,b,c,d==>1,2,3,4
//

// This is a JavaScript coding problem from BFE.dev

function curry(fn) {
  return function curriedFn(...args) {
    console.log(fn.length, args.length);
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFn(...args, ...next);
      };
    }
  };

  // your code here
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
