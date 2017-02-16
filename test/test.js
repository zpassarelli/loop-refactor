'use strict';

const expect = require('chai').expect;
const code = require('../main.js');

describe('convertNameToObject', () => {

  let testArr = [['Jennie', 'Zinko'], ['Amy', 'Marzulla'], ['Dakota', 'Jones']];

  it('transforms a two-dimensional array into a an array of objects with "first" and "last" name properties', () => {
    expect(code.convertNameToObject(testArr)).to.deep.equal([{first: 'Jennie', last: 'Zinko'}, {first: 'Amy', last: 'Marzulla'}, {first: 'Dakota', last: 'Jones'}]);
  });

  it('uses the correct higher order function', () => {
    expect(code.convertNameToObject.toString()).to.not.include('for');
    expect(code.convertNameToObject.toString()).to.not.include('push');
  });
});

describe('stringMatch', () => {

  let testArr = ['apples', 'bananas', 'grapes', 'oranges', 'watermelon'];

  it('stringMatchs elements in an array that match search criteria', () => {
    expect(code.stringMatch(testArr, 'w')).to.deep.equal(['watermelon']);
    expect(code.stringMatch(testArr, 'an')).to.deep.equal(['bananas', 'oranges']);
  });

  it('uses the correct higher order function', () => {
    expect(code.stringMatch.toString()).to.not.include('for');
    expect(code.stringMatch.toString()).to.not.include('push');
  });
});

describe('sum', () => {

  let testArr = [1, 2, 3];
  let testArr2 = [5, 10, 15];

  it('returns the sum of all numbers in an array of numbers', () => {
    expect(code.sum(testArr, 0)).to.equal(6);
    expect(code.sum(testArr2, 5)).to.equal(35);
  });

  it('uses the correct higher order function', () => {
    expect(code.sum.toString()).to.not.include('for');
  });
});

describe('objContainsProp', () => {

  let testArr = [
    {first: 'Kilian', middle: 'Lee', last: 'Jornet'},
    {first: 'Anna', last: 'Frost'}
  ];

  let testArr2 = [
    {first: 'Emilie', middle: 'Ann', last: 'Forsberg'},
    {first: 'Rob', middle: 'Samuel', last: 'Krar'}
  ];

  it('checks whether each object in an array of objects contains some property', () => {
    expect(code.objContainsProp(testArr, 'middle')).to.equal(false);
    expect(code.objContainsProp(testArr2, 'middle')).to.equal(true);
  });

  it('uses the correct higher order function', () => {
    expect(code.objContainsProp.toString()).to.not.include('for');
  });
});

describe('someObjsContainProp', () => {

    let testArr = [
      {first: 'Kilian', middle: 'Lee', last: 'Jornet'},
      {first: 'Anna', last: 'Frost'}
    ];

    let testArr2 = [
      {first: 'Emilie', last: 'Forsberg'},
      {first: 'Rob', last: 'Krar'}
    ];

    it('checks whether some objects in an array of objects contain some property', () => {
      expect(code.someObjsContainProp(testArr, 'middle')).to.equal(true);
      expect(code.someObjsContainProp(testArr2, 'middle')).to.equal(false);
    });

    it('uses the correct higher order function', () => {
      expect(code.someObjsContainProp.toString()).to.not.include('for');
    });
});
