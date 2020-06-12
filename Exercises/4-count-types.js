'use strict';

const countTypesInArray = arr => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const prop = typeof arr[i];
    obj[prop] = obj[prop] ? obj[prop] + 1 : 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
