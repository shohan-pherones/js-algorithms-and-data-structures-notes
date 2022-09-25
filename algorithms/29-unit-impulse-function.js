// demonstrate the unit impulse time samples for 'n'
// x = 0
// y = 1 otherwise 0
// [1,0,0,.......,n]

function unitImpulse(n) {
  let y = [];
  for (let x = 0; x <= n; x++) {
    x == 0 ? y.push(1) : y.push(0);
  }
  return y;
}

console.log(unitImpulse(10));
// O(n)
