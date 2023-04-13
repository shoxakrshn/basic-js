const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringNum = String(n);
  let maxNum = 0;

  for (let i = 0; i < stringNum.length; i += 1) {
    const current = stringNum.split('');
    current.splice(i, 1);
    currentkNum = +current.join('');
    if (currentkNum > maxNum) {
        maxNum = currentkNum;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
