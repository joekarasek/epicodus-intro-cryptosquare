// remove special characters and turn to lowercase
var normalizeText = function(textToNormalize) {
  return textToNormalize.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}
// check if number is a square
var isSquare = function(number) {
  return Math.sqrt(number) % 1 === 0;
}
// get the size of the cryptosquare, side length
var getCryptoSize = function(cryptoText) {
  if (isSquare(cryptoText.length)) {
    return Math.sqrt(cryptoText.length);
  } else {
    var lengthTemp = cryptoText.length;
    for (var i = cryptoText.length; !isSquare(i); i += 1 ) {
      lengthTemp += 1;
    }
    return Math.sqrt(lengthTemp);
  }
}
