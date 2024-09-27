function analyzeArray(array) {
  if (isValid(array)) {
    return "array contains non number value";
  }
  const arr = array.sort((a, b) => a - b);
  const average = arr.reduce((acc, curr) => acc + curr / array.length, 0);
  const min = arr[0];
  const max = arr[arr.length - 1];
  const length = arr.length;
  return { average, min, max, length };
}

function isValid(array) {
  for (let a = 0; a < array.length; a++) {
    if (typeof array[a] !== "number") {
      return true;
    }
  }
}

module.exports = analyzeArray;
