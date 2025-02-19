//
const nums = [1, 2, 3, 4];
// map
const multiplyThree = nums.map((currelement, i, arr) => {
  return currelement * 3;
});
console.log(multiplyThree);

// filter

const moreThenTwo = nums.filter((num) => num > 2);
console.log(moreThenTwo);
// true if it keep the elements otherwise reject it

// reduce
// reduce the elements to down to just one value
// we sum of the elements
const sum = nums.reduce((num, acc) => num + acc, 0);
console.log(sum);
//recieves callback and initial value
// (num, acc) => {} callback
const summ = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
// accumulator is the result of the previous computation
// if there no initial value it takes first element of arrau as initial
// value for accumulator
