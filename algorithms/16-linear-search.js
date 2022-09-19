// Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// arr = [15, 23, 11, 43, 32], t = 11 --> returns 2
// arr = [15, 23, 11, 43, 32], t = 43 --> returns 3
// arr = [15, 23, 11, 43, 32], t = 40 --> returns -1

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([15, 23, 11, 43, 32], 11));
console.log(linearSearch([15, 23, 11, 43, 32], 43));
console.log(linearSearch([15, 23, 11, 43, 32], 40)); // O(n) - linear
