module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((acc, element) => acc + element);
  const finalArray = arr.map(element => sum - element);
  return finalArray;
}
