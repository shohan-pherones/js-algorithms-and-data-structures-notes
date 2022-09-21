// Given an array of integers, sort the array.

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let assume = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < assume) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), assume, ...quickSort(right)];
}

const arr = [8, 20, -4, -2, -6];
console.log(quickSort(arr));

// Worst case (already sorted array) - O(n^2)
// Average case - O(nlogn)
