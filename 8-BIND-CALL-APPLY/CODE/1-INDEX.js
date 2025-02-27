// CALL, APPLY & BIND Interview Question

// Question 1 : What is Call?
function sayHello() {
  return 'Hello' + this.name;
}

var obj = { name: 'Piyush' };
sayHello.call(obj);
// obj is the context we put in the function here the function is sayHello()
// hello piyush

// Question 2 : What is Apply?
function sayHello(day) {
  return 'Hello ' + this.name + ' today is ' + day;
}

var obj = { name: 'Pi' };
console.log(sayHello.apply(obj, ['Mondayday']));
// we have to pass the arguments in the form of array
// otherwise it give createListFromArray called on non-object

// Question 3 : What is Bind?
function sayHello() {
  return 'Hello ' + this.name;
}

var obj = { name: 'Piyush' };
console.log(sayHello.bind(obj));
// bind return a function we have to call this function

const helloFn = sayHello.bind(obj);
console.log(helloFn());
// hello Piyush

// Question 4 : Output
const Person = { name: 'iop' };
function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(Person, 24)); //iop is 24
console.log(sayHi.bind(Person, 24)); //return a function

// Question 5 : Call with function inside object
const age = 123;
// this is distraction
var person = {
  name: 'Piyu',
  age: 20,
  getAge: function () {
    return this.age;
  },
};
var person2 = { age: 24 };
console.log(person.getAge.call(person2));
// 24

// Question 6 : Output
var status = '😎';
setTimeout(() => {
  const status = '😍';
  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus());
  console.log(data.getStatus.call(this)); //😎
}, 0);
// 'this' refers here as the global

// Question 7 : Call printAnimals such that it prints all animals in object
const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' },
];

function printAnimals(i) {
  this.print = function () {
    console.log('#' + i + ' ' + this.species + ': ' + this.name);
  };
  this.print();
}
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// Question 8 : apply to append an array to another
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);

//

// Question 9 - Using apply to enhane built-in functions

const numbers = [12, 32, 1223, 432];
console.log(Math.max.apply(null, numbers));

// Question 10 : How will you Create a bound function
function f() {
  console.log(this);
  // ?
}

let user = {
  g: f.bind(null),
};

user.g();
// this function will pointing to the global

// Question 11 : Bind Chaining?

function f() {
  console.log(this.name);
}

f = f.bind({ name: 'John' }).bind({ name: 'Ann' });
// bind chainig is not happen it only returns 'John'
f();

// Question 12 : Fix the code

function checkPassword(success, failed) {
  // let password = prompt('Password?', '');
  let password = 'hello';
  if (password === 'hello') success();
  else failed();
}
let userr = {
  name: 'Piyush Agarwal',

  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },

  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};
checkPassword(userr.loginSuccessful.bind(userr), userr.loginFailed.bind(userr));

// Question 13 : Partial application for login

function checkPassword(ok, fail) {
  // let password = prompt('Password?', '');
  let password = 'hello';
  if (password == 'Roadside Coder') ok();
  else fail();
}

let userOne = {
  name: 'Piyush Agarwal',

  login(result) {
    console.log(this.name + (result ? ' login successful' : ' login failed'));
  },
};
// checkPassword(userOne.login(true), userOne.login(failed));
checkPassword(
  userOne.login.bind(userOne, true),
  userOne.login.bind(userOne, false)
);
// userOne.login act as a function and we bind it with the object as the current context
// thats why this in the userOne had piyush agrawal

// Question 14 :  Explicit Binding with Arrow Function

const agee = 10;

var person = {
  name: 'Piyush',
  age: 20,
  getAgeArrow: () => console.log(this.age),
  // window object again nothing different in arrow function either we use call apply and bind
  getAge: function () {
    console.log(this.age);
    // 24
  },
};
var person2 = { age: 24 };
console.log(person.getAgeArrow.call(person2));
person.getAge.call(person2);

// Question 15 : Call Method Polyfill

// dummy
function displayName() {
  console.log(this.name);
  // here we are called
}
objectDisplayed = { name: 'here we are called' };
displayName.call(objectDisplayed);
// function.call(currentContext,arguments1,arg2,..)

let car1 = {
  color: 'Red',
  company: 'Ferrari',
};

let car2 = {
  color: 'Blue',
  company: 'BMW',
};

let car3 = {
  color: 'White',
  company: 'Mercedes',
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
  );
}
// this is the function we are give the context means object

Function.prototype.myCall = function (curretContext = {}, ...arg) {
  if (typeof this !== 'function') {
    throw new Error(this + 'it not callable');
  }
  curretContext.fn = this;
  curretContext.fn(...arg);
};
purchaseCar.myCall(car3, '$', '3232');

// Question 16 : Apply Method Polyfill
Function.prototype.myApply = function (currentContext = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(this + 'it is not callable');
  }
  if (!Array.isArray(args)) {
    throw new TyoeError('CreateListFromArrayLike called on non-object');
  }
  currentContext.fn = this;
  currentContext.fn(...args);
};

purchaseCar.myApply(car2, ['₹', '50,00,000']);

// Question 17 : Bind Method Polyfill
Function.prototype.myBind = function (currentContext = {}, ...arg) {
  if (typeof this !== 'function') {
    throw new Error(this + 'it is not callable');
  }
  currentContext.fn = this;
  return function () {
    return currentContext.fn(...arg);
  };
};

const initPurchaseBmw = purchaseCar.myBind(car1, '₹', '1,00,00,000');
initPurchaseBmw();
