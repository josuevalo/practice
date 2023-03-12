const urlEncode = function (text) {
  var percent = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (i !== 0 && i < text.length - 1) {
        percent += "%20";
      }
    } else {
      percent += text[i];
    }
  }
  return percent;
};
