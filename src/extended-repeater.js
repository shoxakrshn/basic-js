const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const initial = { separator: '+', additionSeparator: '|' };
  options = {...initial, ...options};
  const main = [];
  const add = [];
  let word = str;

  if (typeof str !== 'string' && typeof options.addition !== 'string') {
    word = String(str);
    options.addition = String(options.addition)
  }

  if (!options.repeatTimes && !options.additionRepeatTimes) {
    return str + options.addition;
  }

  if (options.addition && !options.additionRepeatTimes) {
    word =  str + options.addition;
  }

  for (let i = 0; i < options.repeatTimes; i += 1) {
    main.push(word);
  }
  
  for (let j = 0; j < options.additionRepeatTimes; j += 1) {
    add.push(options.addition)
  }
  
  const addReady = add.join(options.additionSeparator)
  const mainReady = main.map((item) => item += addReady);
  
  return mainReady.join(options.separator);
}



  

module.exports = {
  repeater
};
