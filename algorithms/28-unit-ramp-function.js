// demonstrate the unit ramp time samples for 'n'
// x = n
// y = n
// [1,2,3,.......,n]

function unitRamp(n) {
  let y = [];
  for (let x = 0; x <= n; x++) {
    y.push(x);
  }
  return y;
}

console.log(unitRamp(10));
// O(n)
