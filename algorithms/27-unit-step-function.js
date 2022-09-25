// demonstrate the unit step time samples for 'n'
// x = n
// y = 1
// [1,1,1,.......,n]

function unitStep(n) {
  let y = [];
  for (let x = 0; x <= n; x++) {
    y.push(1);
  }
  return y;
}

console.log(unitStep(10));
// O(n)
