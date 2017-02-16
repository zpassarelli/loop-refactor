'use strict';

module.exports = {

  //take an array of arrays with firstname, lastname elements and transform each into an object with firstname, lastname key;
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


  //filter elements in an array that match search criteria
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

  //checks whether each object in an array of objects contains some property
  objContainsProp: (arr, prop) => {
    for (var i = 0; i < arr.length; i++){
      if(!arr[i].hasOwnProperty(prop)){
        return false;
      }
    }
    return true;
  },

  //checks where some objects in an array contains some property
  someObjsContainProp: (arr, prop) => {
    for(var i = 0; i < arr.length; i++){
      if(arr[i].hasOwnProperty(prop)){
        return true;
      }
    }
    return false;
  }
};



// let arr = [
//   {first: 'Kristen', middle: 'Lee', last: 'Foster-Marks'},
//   {first: 'Aaron', last: 'Marks'}
// ];
// console.log(module.exports.every(arr, 'first'));

// let arr = [1, 2, 3, 4];
// console.log(module.exports.reduce(arr, 0));

// let arr = ['apples', 'bananas', 'oranges', 'grapes', 'watermelon'];
// console.log(module.exports.filter(arr, 'an'));

// let arr = [['Kristen', 'Foster'], ['Aaron', 'Marks']];
// console.log(module.exports.map(arr));
