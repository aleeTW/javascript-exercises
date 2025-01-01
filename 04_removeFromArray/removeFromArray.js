const removeFromArray = function (array, ...value) {
  const newArray = [];

  array.forEach((element) => {
    if (!value.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2, 7));
// Do not edit below this line
module.exports = removeFromArray;
