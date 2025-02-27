// the flat mehtod creates a new array with all sub array concatenated
// into it recursively up to a specific depth

const arr = [1, [2, [3, [4, [5]]]]];
console.log(arr.flat(4));
// [1,2,3,4,5]
// the array up to depth of 4 , turning all nested elements into a single-level-array
Array.prototype.myFlat = function (depth = 1) {
  //  default depth is 1
  const result = [];
  function flaten(arr, currentDepth) {
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
      if (Array.isArray(currentElement) && currentDepth < depth) {
        flaten(currentElement, currentDepth + 1);
        // If the element is an array, and we haven’t reached the desired depth, we recursively call flatten
        // currentDepth tracks how deep are going in the nested array
      } else {
        result.push(currentElement);
      }
    }
  }
  flaten(this, 0);
  //   'this' is [1, [2, [3, [4, [5]]]]]
  return result;
};
console.log(arr.myFlat(4));
// [1,2,3,4,5]
