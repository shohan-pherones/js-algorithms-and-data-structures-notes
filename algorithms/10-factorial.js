// Given an integer 'n', find the factorial of that integer.

// 0! = 1
// 4! = 4 * 3 * 2 * 1
// 5! = 5* 4 * 3 * 2 * 1

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10)); // O(n) - linear
