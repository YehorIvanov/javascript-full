/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  const [number, ...arr] = numbers;
  return [...arr, number];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  console.log(numbers.shift());
}

console.log(swap(2, 3, 4, 5));
console.log(swapManual(2, 3, 4, 5, 6));
// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
