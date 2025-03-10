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
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
  return `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`;
}
const callCarr = purchaseCar.call(car3, '$', 200000);
console.log(callCarr);
// defualt={}
Function.prototype.myCall = function (currentContext = {}, ...arg) {
  if (typeof this !== 'function') {
    throw new Error(this + 'it is not callable');
  }
  currentContext.fn = this; //assign the function to the object
  currentContext.fn(...arg); //call the function to the object
};
purchaseCar.myCall(car1, '$', '232323');
// puchaseCar is the function which is 'this'
// car1 is object
// now car1 looks like
// car1={
//     color: 'Red',
//   company: 'Ferrari',
//   fn:function purchaseCar(currency,price){}
// }
// currentContext which is passed by car1 now property has fn:function purchaseCar
// currentContext.fn(...arg)
// car1.fn("$","324242")
// fn is now purchaseCar it runs with car as this, this is purchaseCar
