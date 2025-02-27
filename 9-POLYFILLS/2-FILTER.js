const arr = [1, 23, 4, 324, 5];
const myFilterI = arr.filter((value) => value % 2 == 0);
console.log(myFilterI);

// pollyfill

Array.prototype.myFilter = function (callback) {
  result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
const myAnswer = arr.myFilter((value, index) => {
  console.log(index);
  return value % 2 == 0;
});
console.log(myAnswer);
