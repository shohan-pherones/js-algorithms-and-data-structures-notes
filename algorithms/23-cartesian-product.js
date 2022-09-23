// Given two finite no-empty sets, find their cartesian product.

// a = [1,2]
// b = [3,4]
// a x b = [[1,3], [1,4], [2,3], [[2,4]]]

function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2));

// O(mn) --> if lengths are not equal
// O(n^2) --> if lengths are equal
