// POLLYFILL FOR MAP()
// THIS REFERENCE TO THE PARENT ARRAY
// ARR
// THIS==> ARRARY WHOLE
// THIS[I] ELEMENT
nums = [1, 2, 3];
Array.prototype.myMap = function (cb) {
  let temp = [];
  // create the new array
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const numsAns = nums.myMap((curr) => {
  return curr * 3;
});
console.log(numsAns);
