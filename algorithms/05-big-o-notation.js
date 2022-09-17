// What is big-o notation?
// Ans: Big O notation is one of the most fundamental tools for computer scientists to analyze the cost of an algorithm.

// Find the time complexity
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // O(n) - linear

function sum2(num1, num2) {
  return num1 + num2;
}
console.log(sum2(10, 20)); // O(1) - constant

let n = 10;
for (let i = 1; i <= n; i++) {
  console.log(i); // O(n) - linear
}

let m = 10;
for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= m; j++) {
    console.log(j); // O(n^2) - quadratic
  }
}

let x = 10;
for (let i = 1; i <= x; i++) {
  for (let j = 1; j <= x; j++) {
    for (let k = 1; k <= x; k++) {
      console.log(k); // O(n^3) - cubic
    }
  }
}
