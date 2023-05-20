export default (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.map((num) => Math.abs(num)).sort((a, b) => a - b)[0];
};
