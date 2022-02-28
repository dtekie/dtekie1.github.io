"use strict";

//#1
/**
 * double a given number
 * @param {number} num - the first number
 * @returns {number} two times the number
 */
function double(num) {
  return num * 2;
}
console.log(double(2));

//#2

/**
 * make the given number hundred fold
 * @param {number} num - the gieven number
 * @returns {number} hundred fold of the number
 */
function times100(num) {
  return num * 100;
}
console.log(times100(2));

//3a.

/**
 * get elements of an array doubled
 * @param {Array} arr - the given array of numbers
 * @param {Object} double - A function that Multiply the given number by 2
 * @returns {Array} the resulting Array
 */
function myMap(arr, double) {
  let doubledElementsArray = [];
  for (let value of arr) {
    doubledElementsArray.push(double(value));
  }
  return doubledElementsArray;
}
console.log(myMap([1,2,3]));





   



   
    

  
  


