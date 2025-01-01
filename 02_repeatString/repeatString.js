const repeatString = function (text, repeat) {
  let total = "";
  if (repeat < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < repeat; i++) {
      total += text;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = repeatString;
