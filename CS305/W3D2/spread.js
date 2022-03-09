"use strict";
/*eslint-disable*/

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests
module.exports = { copyArray, concat, concatArrayAndArg, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests

function copyArray(oldArr) {
  const newArr = [...oldArr];
  return newArr;
}
const oldArr = [1, 2, 3, 4];
const newArr = copyArray(oldArr);
console.log(copyArray(oldArr));
console.log(newArr == copyArray(oldArr));

function concat(arr1, arr2) {
  return [...arr1, ...arr2];
}
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
console.log(concat(arr1, arr2));

function concatArrayAndArg(arr, arg) {
  return [...arr, arg];
}
console.log(concatArrayAndArg([1, 2, 3], 4));

function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([1, 2, 3, 0, 9, -1]));

function combineObjs(obj1, obj2) {
  const combined = { ...obj1, ...obj2 };
  return combined;
}
const obj1 = { x: 1, y: 2, z: 3 };
const obj2 = { a: 4, b: 5, c: 10 };
console.log(combineObjs(obj1, obj2));

//use of rest in destructuring assignment

// const user = {
//     'name': 'John',
//     'address': '5365 Lawrenceville, Georgia',
//     'age': 18
// };
// const {age, ...rest} = user;
// console.log(age);
// console.log(rest);
// //use of rest in a function call
// rest as a function call
// function sum(...theArgs) {
//     return theArgs.reduce((previous, current) => {
//       return previous + current;
//     });
//   }

//   console.log(sum(1, 2, 3));
//   // expected output: 6

//   console.log(sum(1, 2, 3, 4));
//   // expected output: 10

// function myFunction(a,  b, ...otherArgs) {
//     console.log(a);
//     console.log(b);
//     console.log(otherArgs);
//   }

//   myFunction("one", "two", "three", "four", "five", "six");

// function fun(){
//     console.log("timeout method test");
// }
// const timerId = setTimeout(fun,1000);
// console.log(timerId);

/*make the numbers print out after the “from” seconds, 
e.g., 5 will print after 5 seconds, then 6 in one more second, 
etc (this is optional – if you want extra coding practice) 
setTimeout version (this is optional )
*/
// function fun(seconds){
//     console.log(seconds);
// }

//version1
// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }

//   printNumbers(5, 10);

//   //version2
//   function printNumbers1(from, to) {
//     let current = from;

//     setTimeout(function start() {
//       console.log(current);
//       if (current < to) {
//         setTimeout(start, 1000);
//       }
//       current++;
//     }, 5000);
//   }

//   // usage:
//   printNumbers1(5, 10);
