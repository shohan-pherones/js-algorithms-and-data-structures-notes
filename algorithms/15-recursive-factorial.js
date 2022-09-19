// Given an integer 'n', find the factorial of that integer.

// 0! = 1
// 4! = 4 * 3 * 2 * 1
// 5! = 5* 4 * 3 * 2 * 1

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1); // n! = n * (n - 1)
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(7)); // O(n) - linear
