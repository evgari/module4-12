'use strict';
const arr = [];

const generateRandomArr = arr => {
  arr.push(Math.round(Math.random() * 10));

  const result = arr.reduce((sum, elem) => sum + elem, 0);

  if (result > 50) {
    return arr;
  } else {
    return generateRandomArr(arr);
  }
};

console.log(generateRandomArr(arr));


