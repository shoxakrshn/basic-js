const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let deepest = 1;
    for (const num of arr) {
      if (Array.isArray(num)) {
          let sum = this.calculateDepth(num) + 1;
          deepest = Math.max(deepest, sum)
      }
    } 

    return deepest;
  }
}

module.exports = {
  DepthCalculator
};
