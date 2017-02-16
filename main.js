'use strict';

module.exports = {

  convertNameToObject: (arr) => {
    let nameObj = [];
    for(var i = 0; i < arr.length; i++){
      let obj = {};
      obj.first = arr[i][0];
      obj.last = arr[i][1];
      nameObj.push(obj);
    }
    return nameObj;
  },

  stringMatch: (arr, str) => {
    let matches = [];
    for(var i = 0; i < arr.length; i++){
      if (arr[i].includes(str)){
        matches.push(arr[i]);
      }
    }
    return matches;
  },

  sum: (arr, base) => {
    let sum = base;
    for (var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  objContainsProp: (arr, prop) => {
    for (var i = 0; i < arr.length; i++){
      if(!arr[i].hasOwnProperty(prop)){
        return false;
      }
    }
    return true;
  },

  someObjsContainProp: (arr, prop) => {
    for(var i = 0; i < arr.length; i++){
      if(arr[i].hasOwnProperty(prop)){
        return true;
      }
    }
    return false;
  }
};
