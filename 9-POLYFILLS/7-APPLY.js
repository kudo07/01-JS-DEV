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
const callCarr = purchaseCar.apply(car3, ['$', 200000]);

Function.prototype.myApply = function (currentContext = {}, arg = []) {
  if (typeof this !== 'function') {
    throw new Error(this + 'it is not callable');
  }
  if (!Array.isArray(arg)) {
    throw new TypeError('CreateListFromArrayLike called on non-object');
  }
  //   currentContext is car3
  currentContext.fn = this;
  currentContext.fn(...arg);
};

purchaseCar.myApply(car1, ['₹', '50,00,000']);
