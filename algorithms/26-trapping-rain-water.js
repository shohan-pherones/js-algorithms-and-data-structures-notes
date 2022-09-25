// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

function trap(height) {
  let water = 0;
  let leftMax = -1;
  let rightMax = -1;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  if (height.length < 3) return water;

  while (leftIndex <= rightIndex) {
    leftMax = height[leftIndex] > leftMax ? height[leftIndex] : leftMax;
    rightMax = height[rightIndex] > rightMax ? height[rightIndex] : rightMax;

    if (leftMax > rightMax) {
      water += rightMax - height[rightIndex];
      rightIndex--;
    } else {
      water += leftMax - height[leftIndex];
      leftIndex++;
    }
  }
  return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 5, 2, 0, 6, 1, 0, 4, 2, 3])); // O(n), O(1)
