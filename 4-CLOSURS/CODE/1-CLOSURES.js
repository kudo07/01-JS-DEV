// Question 1 : Lexical Scope

// global scope
function local() {
  // local scope
  var username = 'Roadsidecoder';
  console.log(username);
}
local();

// QUESTIONS 2
function makeFunc() {
  var uname = 'mozila';
  function displayName() {
    console.log(uname);
    // due to lexical scoping we can access the outside variable isnide this
    // function due to lexical scope and var and let can be accessed
    // var create the new scope in global and function scope and let also do the new refreence
    // but var can be redecalred with the same reference in the same scope
    // but let cannot re decalred in the same scope and not hoisted means var in same same scope create
    // the bucket for the variable and return undefined if we access before but in let variable are decalred in temporal dead zone thats why it give
    // refrecne errror
  }
  return displayName;
}
var myFunc = makeFunc();
myFunc();

// Question 3 : Closure scope chain

const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4));
//20
// Question 4 : Output

let count = 0;
(function printCount() {
  // block scope
  // this count is access from the outside
  if (count === 0) {
    // block scope
    let count = 1;
    console.log(count); //1
  }
  console.log(count); // 0
})();

// Question 5 : Write function for this addSix()
function addSix(num) {
  return function (innerNum) {
    console.log(innerNum + num);
    //9
    // lexical scopeing access the parent function addSix "num"
    // inside the local annonymous function
  };
}
var addSix = addSix(5);
addSix(4);

// Question 6 : Time Optimization
function find() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}
// const closure = find();
// console.time('6');
// closure(6);
// console.timeEnd('6');
// console.time('50');
// closure(50);
// console.timeEnd('50');

function findOne(index) {
  a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return a[index];
}
// console.time('7');
// const closureOne = findOne(7);
// console.timeEnd('7');

// Question 6 : Block scope and set Time out
// using let
function abc() {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// abc(); 1 2 3
// 1. due to lexical scoping we can access the i inside the settimeout
// due to let is the block scope it create each time a new block for the i in the memory and when the whole
// code exexute line by line it remembers their reference with that particular i because each time a new block is create for the new i as the number
//

// var
function abs() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// abs();
// 3 3 3
// var is the global and fucntions scope  so when the whole code executes and the last value for the var is 3 it remebers that 3 in the fucntiosn scope
// because in the same function scope it remebrs and pointing the same refernce whenever we re decalred it , it modifies the exisiting one in the fucntion and global scope

// var without using let
function bbc() {
  for (var i = 0; i < 3; i++) {
    function innner(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    innner(i);
  }
}
// bbc();

// Question 7 : How would you use a closure to create a private counter?
function counter() {
  var _counter = 0;
  function add(increment) {
    _counter += increment;
  }
  function retreive() {
    return 'Counter = ' + _counter;
  }
  return {
    add,
    retreive,
  };
}
const c = counter();
console.log(c.add(5));
// cannot read properties of undefiend (reading 'add') if comment the return{add, retreive}

console.log(c.add(10));
console.log(c.retreive());

// Question 8 : Module Pattern :
var module = (function () {
  function privateMethod() {
    console.log('private');
  }
  return {
    publicMethod: function () {
      console.log('public');
    },
  };
})();

module.publicMethod();
// module.privateMethod();

// Question 9 : Make this run only once

let view;
// declared
function Like() {
  let called = 0; //local or function scope
  return function () {
    if (called > 0) {
      console.log('already');
    } else {
      view = 'viewd';
      // access outside variabels due to lexical scope
      // var and let and const due to lexical scope
      // var is get new reference in the globala and function scope
      // let also get the new refernce in the global and function scope
      // var is globaal and fucntion scope and can re declared in global with same reference  and function scope seperately
      //let is a bloc scope and cant hoisted and cant re declared

      // called is accessible which declare outside due to lexical scope can acces the parent and grandparent variable
      // /bcz of lexical scope
      console.log(view);
      called++;
    }
  };
}
let isSub = Like();
isSub();
isSub();
isSub();

// Question 10 : once Polyfill
function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => {
  console.log('hi', a, b);
});

hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
