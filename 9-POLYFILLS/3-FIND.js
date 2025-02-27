//
// find methid return the first element in an array that satisfies a given condition, determined by a callback function. if no elements match it returns undefined
const nums = [1, 2, 3, 4, 20];
const result = nums.find((num) => num > 15);
console.log(result);
// undefined if we remove 20 from an arrray
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

const answer = nums.myFind((num) => num > 15);
console.log(answer);
// 20
