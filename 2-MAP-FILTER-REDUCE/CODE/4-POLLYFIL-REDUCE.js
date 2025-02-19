Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const nums = [1, 2, 3, 4];
const summ = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(summ);
// accumulator has initial value is 10 and it is the result of the previous computation
