// the bind mehtod creates a new function that when called has its this value set to a provided object
// it also akkow pre-setting arguments for the function

const person = { name: 'Alic' };
function greet(greeting) {
  console.log(`${greeting},${this.name}`);
}
const boundGreet = greet.bind(person);
boundGreet('hello');
// hello==>"greeting argument in the greet fucntion
// this is bound to the person so this.name becomes 'alice'
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
// function which bind has apply
function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price} `
  );
}
//
Function.prototype.MyBind = function (currentContext = {}, ...arg) {
  if (typeof this !== 'function') {
    throw new Error(this + 'it is not callable');
  }
  currentContext.fn = this;
  return function () {
    return currentContext.fn(...arg);
  };
};
const purchasebuy = purchaseCar.MyBind(car1, '$', '432432432');
// this return a function

// currentContext is the car1 which by pass as an argument
// currentContext = car1 = {
//   color: 'Red',
//   company: 'Ferrari',
//   ():function purchaseCar{}
// };
// we have to call what we saved in purchasebuy

purchasebuy();
