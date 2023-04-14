const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    this.type = type;
  }
  encrypt(str, key) {
    if (!str || !key ) {
      throw new Error("Incorrect arguments!");
    }

    if (!key || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const strUp = str.toUpperCase();
    const keyUp = key.toUpperCase();

    let ciphered = '';
    let keyIdx = 0;

    for (let i = 0; i < strUp.length; i += 1) {

      if (this.alphabet.includes(strUp[i])) {
        const strIndex = this.alphabet.indexOf(strUp[i]);
        const keyIndexMod = this.alphabet.indexOf(keyUp[keyIdx % key.length]);
        const cipheredLetter = this.alphabet[(strIndex + keyIndexMod) % 26];
        ciphered += cipheredLetter;
        keyIdx += 1;
      } else {
      ciphered += strUp[i];
      }
    }

    return this.type ? ciphered : ciphered.split('').reverse().join('');
  }

  decrypt(cipher, key) {
    if (!cipher || !key) {
      throw new Error("Incorrect arguments!");
    }

    const cipherUp = cipher.toUpperCase();
    const keyUp = key.toUpperCase();

    let deciphered = '';
    let keyIdx = 0;

    for (let i = 0; i < cipherUp.length; i += 1) {
      if (this.alphabet.includes(cipherUp[i])) {
        const cipherIdx = this.alphabet.indexOf(cipherUp[i]);
        const keyIndexMod = this.alphabet.indexOf(keyUp[keyIdx % key.length]);
        const isPositive = (cipherIdx - keyIndexMod);
        const decipheredLetterIdx = isPositive >= 0 ? isPositive % 26 : (isPositive + 26) % 26;
        const decipheredLetter = this.alphabet[decipheredLetterIdx];
        
        deciphered += decipheredLetter;
        keyIdx += 1;
      } else {
        deciphered += cipherUp[i];
      }
    }

    return this.type ? deciphered : deciphered.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

