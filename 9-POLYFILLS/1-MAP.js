// create a new array by applying a function to each element in the original array

// to make this
arr = [1, 2, 3, 4, 5];
const myMod = arr.map((val, index) => {
  console.log(index);

  return val * 2;
});
console.log(myMod);
//

// polyfill
// create the new method called 'myMap' to Array.prototype
Array.prototype.myMap = function (callback) {
  result = [];
  for (let i = 0; i < this.length; i++) {
    // apply the callback to each element
    result.push(callback(this[i], i, this));
    // current Element,i,array itself
    // 'this' referes here [1,2,3,4,5] the current array
  }
  return result;
};

const MyModOne = arr.myMap((value, index, arr) => {
  return value * 3;
});

console.log(MyModOne);
