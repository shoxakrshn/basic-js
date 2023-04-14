const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let steps = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === -1) continue;

        let current = arr[i];
        let jIndex = 1;

        while (arr[i + jIndex] === -1) {
            jIndex += 1;
        }

        let next = arr[i + jIndex];

        if (current > next) {
            let temp = current;
            arr[i] = next;
            arr[i + jIndex] = temp;
            swapped = true;
        }
    }
    steps -= 1;
  } while (swapped);
  
return arr;
}

module.exports = {
  sortByHeight
};
