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

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {

    if (!message || !key) {
      throw new Error(`Incorrect arguments!`);
    }

    const alphabetList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    const keyLength = key.length;

    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      if (alphabetList.includes(messageUpper[i])) {
        let letterPos = alphabetList.indexOf(messageUpper[i]);
        let shift = alphabetList.indexOf(keyUpper[keyIndex]);
        let encryptedLetterPos = (letterPos + shift) % 26;
        encryptedMessage += alphabetList[encryptedLetterPos];

        keyIndex++;
        if (keyIndex == keyLength) {
          keyIndex = 0;
        }
      } else {
        encryptedMessage += messageUpper[i];
      }
    }
    if (this.isDirect) {
      return encryptedMessage;
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {

    if (!encryptedMessage || !key) {
      throw new Error(`Incorrect arguments!`);
    }

    const alphabetList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const encryptedMessageUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();
    const keyLength = key.length;

    let message = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessageUpper.length; i++) {
      if (alphabetList.includes(encryptedMessageUpper[i])) {
        let encryptedLetterPos = alphabetList.indexOf(encryptedMessageUpper[i]);
        let unShift = alphabetList.indexOf(keyUpper[keyIndex]);
        let letterPos = (encryptedLetterPos - unShift);
        if (letterPos < 0) {
          letterPos = 26 + letterPos;
        }
        message += alphabetList[letterPos];

        keyIndex++;
        if (keyIndex == keyLength) {
          keyIndex = 0;
        }
      } else {
        message += encryptedMessageUpper[i];
      }
    }
    if (this.isDirect) {
      return message;
    } else {
      return message.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
