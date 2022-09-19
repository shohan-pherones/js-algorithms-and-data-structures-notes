// Given a natural number 'n', determine if the number is prime or not.

// 5 is prime (1 * 5 or 5 * 1)
// 4 is not prime (1 * 4 or 2 * 2 or 4 * 1)

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(125));
console.log(isPrime(30)); // O(n) - linear
