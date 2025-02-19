// Question 1 : Currying
function f(a) {
  return (b) => {
    return 'Works';
  };
}
// console.log(f(1));
// RETURNS A CURLY BRACES
console.log(f(1)(2));

// Question 2 : sum(2)(6)(1)
function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3));

// 4 : Write a currying fn
//       evaluate("sum")(4)(2)
//       evaluate("multiply")(4)(2)
//       evaluate("divide")(4)(2)
//       evaluate("substract")(4)(2);

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === 'sum') return a + b;
      else if (operation === 'multiple') return a * b;
      else if (operation === 'divide') return a / b;
      else if (operation === 'substract') return a - b;
    };
  };
}
console.log(evaluate('sum')(2)(2));
console.log(evaluate('multiply')(4)(2));
console.log(evaluate('divide')(4)(2));
console.log(evaluate('substract')(4)(2));
console.log(evaluate('substr')(4)(2));

// Question 5 : Infinite Currying -> sum(1)(2)(3)....(n)

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(5)(3)(4));
// λ { arguments: null, caller: null, prototype: { constructor: λ {...} } }
// λ { arguments: null, caller: null, prototype: { constructor: λ {...} } }
// {
//   arguments: null,
//   caller: null,
// prototype: {
//   constructor: λ {...}
//   }
// }

console.log(add(5)(3)(4)());
// Evaluating console.log(add(5)(3)(4)());
// add(5)(3)(4) → returns add(12), which is a function.
// add(12)() → since b is not provided, it returns 12.

// function sum(a) {
//     return (b, c) => {
//         return a * b * c
//     }
// }

// let x = sum(10);
// x(3,12);
// x(20,12);
// x(20,13);
// OR
// sum(10)(3,12);
// sum(10)(20,12);
// sum(10)(20,13);
// the number of functions should be equal to the number of argumenr
// currying
let d = 10;
function resolve(a) {
  return function (b) {
    return function (c) {
      return a + b + c + d;
    };
  };
}
console.log(resolve(12)(12)(12));
//46

// Question 7 : real world example of currying => Maniplating DOM
// arrowfuntion
const updateElemText = (id) => (content) =>
  (document.querySelector(`#${id}`).textContent = content);

//
function updateElemTextOne(id) {
  return function (content) {
    document.querySelector('#' + id).textContent = content;
  };
}
const updateHeader = updateElemTextOne('heading');
updateElemTextOne('it has been changef');

// Question 8 : Curry() implementation
// convert f(a,b,c)===> f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    // console.log(args.length,func.length)
    // f(a,b,c,d)==.4
    // totalsum(1)==> 1<=4
    // totalsum(1)(6)==>2<=4
    if (args.length >= func.length) {
      return func(...args);
    } else {
      // pass the next args when 1<4 , 2<4 ,3 <4 , 4<=4
      return function (...n) {
        return curriedFunc(...args, ...n);
      };
    }
  };
}
const sumCurry = (a, b, c) => a + b + c;
const totalSum = curry(sumCurry);
console.log(totalSum(1)(6)(5));
