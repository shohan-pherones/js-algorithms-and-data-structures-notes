// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// arr = [15, 23, 31, 43, 52], t = 23 --> returns 1
// arr = [15, 23, 31, 43, 52], t = 31 --> returns 2
// arr = [15, 23, 31, 43, 52], t = 43 --> returns 3
// arr = [15, 23, 31, 43, 52], t = 66 --> returns -1

function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right) / 2);

  switch (true) {
    case target === arr[mid]:
      return mid;
    case left - right === 0:
      return -1;
    case target < arr[mid]:
      return recursiveBinarySearch(arr, target, left, mid - 1);
    case target > arr[mid]:
      return recursiveBinarySearch(arr, target, mid + 1, right);
  }
}

console.log(recursiveBinarySearch([15, 23, 31, 43, 52], 23));
console.log(recursiveBinarySearch([15, 23, 31, 43, 52], 31));
console.log(recursiveBinarySearch([15, 23, 31, 43, 52], 43));
console.log(recursiveBinarySearch([15, 23, 31, 43, 52], 66)); // O(logn) - logarithmic
