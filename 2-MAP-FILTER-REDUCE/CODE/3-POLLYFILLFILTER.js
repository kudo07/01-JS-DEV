// pollyfil for the filter
nums = [1, 2, 3, 4, 5];
const ansFilter = nums.filter((curr) => {
  return curr > 2;
});
console.log(ansFilter);

Array.prototype.myFilter = function (cb) {
  temp = [];
  //   create the new array
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
const myFilterAns = nums.myFilter((curr) => {
  return curr > 2;
});
console.log(myFilterAns);
