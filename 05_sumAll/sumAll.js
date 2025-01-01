const sumAll = function (valueOne, valueTwo) {
  let sum = 0;
  if (Number.isInteger(valueOne) && Number.isInteger(valueTwo)) {
    if (valueOne > 0 && valueTwo > 0) {
      if (valueOne < valueTwo) {
        for (valueOne; valueOne <= valueTwo; valueOne++) {
          sum += valueOne;
        }
      } else {
        for (valueTwo; valueTwo <= valueOne; valueTwo++) {
          sum += valueTwo;
        }
      }
    } else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }
  return sum;
};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
