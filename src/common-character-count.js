const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const word = s1.split('');
    let count = 0;
    const arr = [];
    
    for (let i = 0; i < s2.length; i += 1) {
        if (word.includes(s2[i])) {
            count += 1;
            const idx = word.indexOf(s2[i]);
            word[idx] ='';
        }
    }
    console.log(arr);
    return count;
}

module.exports = {
  getCommonCharacterCount
};
