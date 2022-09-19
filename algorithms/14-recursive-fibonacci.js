// Given a number 'n', find the nth element of the fibonacci sequence.

// [0,1,1,2,3,5,8,...n]
// first two elements are 0 and 1
// 6th element is 8

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(7)); // O(2^n)
