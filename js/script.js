// remove special characters and turn to lowercase
var normalizeText = function(textToNormalize) {
  return textToNormalize.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}
// check if number is a square
var isSquare = function(number) {
  return Math.sqrt(number) % 1 === 0;
}
