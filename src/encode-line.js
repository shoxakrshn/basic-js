const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = str.split('');
  const result = [];
  for (let i = 0; i < strArr.length; i += 1) {
    let acc = 1;
    while (str[i] === str[i + 1]) {
      acc += 1;
      i += 1;
    }
    
    let num = acc === 1 ? str[i] : acc + str[i]
    result.push(num)
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
