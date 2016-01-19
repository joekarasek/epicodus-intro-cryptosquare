var normalizeText = function(textToNormalize) {
  // remove special characters
  var normalizedText = textToNormalize.replace(/[^a-zA-Z0-9]/g, '');
  return normalizedText.toLowerCase();
}
