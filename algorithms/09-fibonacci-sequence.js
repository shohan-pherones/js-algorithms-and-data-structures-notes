// Given a number 'n', find the first 'n' element of the fibonacci sequence.

// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(8) = [0,1,1,2,3,5,8,13]

function fibonacci(n) {
  const fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(8));
console.log(fibonacci(10)); // O(n) - linear

// Guides
// Calculation not dependent on input size - O(1)
// Single loop - O(n)
// Nested loop - O(n^2)
// Input size reduced by half - O(logn)
