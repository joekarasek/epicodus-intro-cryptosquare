var normalizeText = function(textToNormalize) {
  // remove special characters and turn to lowercase
  return textToNormalize.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}
