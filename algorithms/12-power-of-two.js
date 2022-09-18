// Given a positive integer 'n', determine if the number is a power of 2 or not

// 1 = true (2^0)
// 2 = true (2^1)
// 5 = false

function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(powerOfTwo(1));
console.log(powerOfTwo(2));
console.log(powerOfTwo(5));
console.log(powerOfTwo(8)); // O(logn) - logarithm
