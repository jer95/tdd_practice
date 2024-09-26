function caesarCipher(string, shiftFactor) {
  return shift(string, shiftFactor);
}

function shift(string, shiftFactor) {
  const str = string.split("");
  let shiftedStr = "";
  for (let a = 0; a < str.length; a++) {
    let code = str[a].charCodeAt();
    if (code >= 65 && code <= 90) {
      let newStrCode = ((code - 65 + shiftFactor) % 26) + 65;
      shiftedStr += String.fromCharCode(newStrCode);
    } else if (code >= 97 && code <= 122) {
      let newStrCode = ((code - 97 + shiftFactor) % 26) + 97;
      shiftedStr += String.fromCharCode(newStrCode);
    } else {
      shiftedStr += str[a];
    }
  }
  return shiftedStr;
}
module.exports = caesarCipher;
