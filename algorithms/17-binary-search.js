// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// arr = [15, 23, 31, 43, 52], t = 23 --> returns 1
// arr = [15, 23, 31, 43, 52], t = 31 --> returns 2
// arr = [15, 23, 31, 43, 52], t = 43 --> returns 3
// arr = [15, 23, 31, 43, 52], t = 66 --> returns -1

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleindex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleindex]) {
      return middleindex;
    }
    if (target > arr[middleindex]) {
      leftIndex = middleindex + 1;
    } else {
      rightIndex = middleindex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([15, 23, 31, 43, 52], 23));
console.log(binarySearch([15, 23, 31, 43, 52], 31));
console.log(binarySearch([15, 23, 31, 43, 52], 43));
console.log(binarySearch([15, 23, 31, 43, 52], 66)); // O(logn) - logarithmic
