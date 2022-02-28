"use strict";
module.exports = { maxThree, sum, multiply, 
  findLongestWord,reverseArray,reverseArrayInPlace,
  scoreExams, generateArray };
/**
 * get the largest number
 * @param {number} num1 - the first number
 * @param {number} num2 - the second number
 * @param {number} num3 - the third number
 * @returns {number} the largest of the three
 */
function maxThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else return num3;
}
/**
 * get sum of the array elements
 * @param {Array} arr - the given array of numbers
 * @returns {number} the sum of the array elements
 */
function sum(arr) {
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum;
}
console.log(sum([1, 2, 3, 4]));
/**
 * get the product of the array elements
 * @param {Array} arr - the first number
 * @returns {number} the prodcut of the array elements
 */
function multiply(arr) {
  let product = 1;
  for (let value of arr) {
    product *= value;
  }
  return product;
}
console.log(multiply([1, 2, 3, 4]));

/**
 * get the element of an array with the largest length
 * @param {Array} arrWords - an array of words
 * @returns {number} the length of the largest element of the array
 */
function findLongestWord(arrWords) {
  let maxLength = arrWords[0].length;
  for (let i = 1; i < arrWords.length; i++) {
    if (arrWords[i].length > maxLength) {
      maxLength = arrWords[i].length;
    }
  }
  return maxLength;
}
let arrWords = ["Daniel", "Tekie", "Filmon", "whateverthsts"];
console.log(findLongestWord(arrWords));

/**
 * get the element of an array with the largest length
 * @param {Array} arr - the array that needs to be reversed
 * @returns {Array} reversed array
 */
function reverseArray(arr) {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return reverseArray;
}
console.log(reverseArray([1, 2, 3, 4]));

/**
 * get the element of an array with the largest length
 * @param {Array} arr - the array that needs to be reversed
 * @returns {Array} reversed array
 */
function reverseArrayInPlace(arr) {
  let temp = arr.slice(0);
  arr.length = 0;
  for (let i = temp.length - 1; i >= 0; i--) {
    arr.push(temp[i]);
  }

  return arr;
}
let numbers = [1, 2, 3, 4];
console.log(reverseArrayInPlace(numbers));

/** 
* @param {Object} arr1 the fist number.
* @param {Object} arr2 the second number.
* @return {object} the array of scores.
*/
function scoreExams(arr1, arr2) {
  let count = 0;
  let scores = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] === arr2[j]) {
        count++;
      }
    }
scores.push(count);
    count = 0;
  }
  return scores;
}
const studentAnswers = [
  [3, 1, 2, 4],
  [3, 1, 2, 2],
  [3, 1, 2, 4],
];
const correctAnswers = [3, 1, 2, 4];
console.log(scoreExams(studentAnswers, correctAnswers));

/**

* @param {Number} num1 the first number.
* @param {Number} num2 the second number.
* @return {object} the array of scores.
*/
function generateArray(num1, num2) {
  let arr = [];
  for (let i = 0; i < num1; i++) {
    arr[i] = [];
    for (let j = 0; j < num2; j++) {
      arr[i][j] = num2 * i + (j + 1);
    }
  }
  return arr;
}
console.log(generateArray(2, 1));
