"use strict";
/*eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests

// /**
//  *
//  * @param {string} str the string param
//  * @returns {string} str the modified string
//  */
// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join("");
// }

/*Write a function filterRange(arr, a, b) that gets 
an array arr, looks for elements with values higher or equal
to a and lower or equal to b and return a result as an array.
The function should not modify the array. 
It should return the new array.

For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)
// */
// /**
//  *
//  * @param {array} arr the array to be filtered
//  * @param {number} a the first element in the filtered array
//  * @param {number} b the last element in the filtered array
//  * @returns {Array} arr the new array
//  */
// function filterRange(arr, a, b) {
//   return arr.filter((item) => a <= item && item <= b).sort();
//}
// function filterRange(arr, a, b) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++){
//     if (a <= arr[i] && arr[i]<= b){
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray.sort();
//   }
/*
Write a function filterRangeInPlace(arr, a, b) that gets 
an array arr and removes from it all values except those 
that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. 
It should not return anything.
// */
// /**
//  *
//  * @param {Array} arr the input array
//  * @param {number} a element of the array
//  * @param {number} b element of the array
//  * @returns {array} arr the modified array
//  */
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// /**
//  * 
//  * @param {number} a the first number
//  * @param {number} b the second number 
//  * @returns {number} the number to be returned 
//  */

// /**
//  * 
//  * @param {Array} arr the input array
//  * @returns {arr} arr copy of the array and sorted
//  */

// /**
//  * returns {object} method this returns a calculator object
//  */
// function Calculator() {
  
//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }

//You have an array of user objects, each one has user.name.
// Write the code that converts it into an array of names.
//For instance:


/*
You have an array of user objects, each one has name, 
surname and id.
Write the code to create another array from it, of objects 
with id and fullName, where fullName is generated 
from name and surname. For instance:
*/


// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }

// 