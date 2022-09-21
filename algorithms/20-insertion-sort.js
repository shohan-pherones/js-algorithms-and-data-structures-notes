// Given an array of integers, sort the array.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1; // j = index of sorted element
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [8, 20, -4, -2, -6];
insertionSort(arr);
console.log(arr); // O(n^2) - quadratic
