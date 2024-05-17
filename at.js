const arr = [1, 2, 3, 4];

arr.at(1); // refers to the second element inside arr

arr.at(-1); // refers to the last element inside arr

arr.at(-2); // refers to the second last element inside arr

// so the reverse order will be: -1, -2, -3, -4
// the normal order will be 0, 1, 2, 3

arr.find((el) => {
  console.log("checks");
  return el >= 3;
}); // find will loop 3 times until find the result (low efficiency)

// Better scan !!!!
arr.findLast((el) => {
  console.log("checks");
  return el >= 3;
}); // only loop 1 once and get number 9 immediately (higher efficiency)
