// Given an array of integers, sort the array.

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [8, 20, -4, -2, -6];
bubbleSort(arr);
console.log(arr); // O(n^2) - quadratic
