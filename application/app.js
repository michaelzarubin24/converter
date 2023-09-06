"use strict";
class LetterToNumberConverter {
  constructor() {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  convertToNumbers(inputString) {
    inputString = inputString.trim();

    let result = "";

    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i].toLowerCase();

      if (char === " ") {
        result += " ";
      } else if (this.alphabet.includes(char)) {
        const number = char.charCodeAt(0) - 96;
        result += number + " ";
      }
    }

    return result.trim();
  }
}

// Usage
const converter = new LetterToNumberConverter();
const inputString = "Hello world";
const convertedString = converter.convertToNumbers(inputString);
console.log(convertedString);
