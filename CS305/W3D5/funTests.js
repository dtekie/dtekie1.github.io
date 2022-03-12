"use strict";
/*eslint-disable*/

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
 */
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
function myMap(arr, myFunc) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    myArr.push(myFunc(arr[i]));
  }
  return myArr;
}

function double(num) {
  return num * 2;
}

function cube(num) {
  return Math.pow(num,3);
}

let arr = [1,2,3,4,5,0,-1];
console.log(myMap(arr,double));
console.log(myMap(arr,cube));

function myFilter(arr, myFunc) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (myFunc(arr[i])) {
      myArr.push(arr[i]);
  }
}
return myArr;
}

function even(num) {
  return num % 2 === 0;
}

function greaterThan1(num) {
  return num > 1;
}
console.log(myFilter(arr,even));
console.log(myFilter(arr,greaterThan1));

function myReduce(arr, myFunc, initial) {
  for (let element of arr) {
    initial = myFunc(element,initial);
  }
  return initial;
}

function add(a,b) {
  return a+b;
  }
  function mult(a,b) {
    return a*b;
    }

let myArr = [1, 2, 3, 4,5,-1];
console.log(myReduce(myArr, add,0));
console.log(myReduce(myArr, mult,1));

// /**
//  *
//  * @param {*} arr
//  * @param {*} func
//  * @returns
//  */
// function myFilter(arr, func) {
// //IMPLEMENTATION NEEDED
// }

// /**
//  *
//  * @param {*} arr
//  * @param {*} func
//  * @param {*} initialValue
//  * @returns
//  */
// function myReduce(arr, func, initialValue) {
//     //IMPLEMENTATION NEEDED
//     return  ;
//     }
