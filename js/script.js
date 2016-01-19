var normalizeText = function(textToNormalize) {
  // remove special characters and turn to lowercase
  return textToNormalize.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}
var isSquare = function(number) {
  if(Math.sqrt(number) %1 === 0) {
    return true;
  } else {
    return false;
  }
}
