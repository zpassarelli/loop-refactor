'use strict';

module.exports = {

  //take an array of arrays with firstname, lastname elements and transform each into an object with firstname, lastname key;
  map: (arr) => {
    let mapped = [];
    for(var i = 0; i < arr.length; i++){
      let obj = {};
      obj.first = arr[i][0];
      obj.last = arr[i][1];
      mapped.push(obj);
    }
    return mapped;
  },


  //filter elements in an array that match search criteria
  filter: (arr, str) => {
    let filtered = [];
    for(var i = 0; i < arr.length; i++){
      if (arr[i].includes(str)){
        filtered.push(arr[i]);
      }
    }
    return filtered;
  },

  reduce: (arr, base) => {
    for (var i = 0; i < arr.length; i++){
      base += arr[i];
    }
    return base;
  },

  //checks whether each object in an array of objects contains a 'middle' property
  every: (arr, prop) => {
    for (var i = 0; i < arr.length; i++){
      if(!arr[i].hasOwnProperty(prop)){
        return false;
      }
    }
    return true;
  },

  //checks where some objects in an array contain a 'middle' property
  some: (arr, prop) => {
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
