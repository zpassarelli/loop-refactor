'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce(function(prev,cur){
      return prev + cur;
    },base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function(val){
      return val.hasOwnProperty(prop);
    });
  },

  convertNameArrayToObject: (arr) => {
    return arr.map(function(val){
      return {
        'first': val[0],
        'last': val[1]
      };
    });
  },

  objContainsProp: (arr, prop) => {
    return arr.every(function(val){
      return val.hasOwnProperty(prop);
    });
  },

  stringMatch: (arr, str) => {
    return arr.filter(function(val){
      return val.includes(str);
    });
  },
};
