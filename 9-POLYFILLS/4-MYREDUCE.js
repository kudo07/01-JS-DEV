arr = [12, 32, 12, 32];
const ans = arr.reduce((value, acc) => {
  return value + acc;
}, 0);
console.log(ans);
// 88

// reduce takes the callback with value and accumulator which reduces to on value according to the condition

Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};
// accumulator is initialvalue is 0 and takes the previous value of the return from the callback
const answerOne = arr.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(answerOne);
// 88
