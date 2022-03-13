"use strict";
/* global assert doubleNums doubleAges */

/*eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = {
//   doubleNums,
//   doubleAges,
//   filterEven,
//   filterOver10,
//   findEvenNum,
//   findEvenAge,
//   // includesEvenNum,
//   // includesEvenAge,
//   sumOfNumbers,
//   sumOfAges,
//   averageOfNumbers,
//   averageOfAges,
//   maxOfNumbers,
//   maxOfAges,
//   averageOfEvenNumbers,
//   averageOfOddNumbers,
//   averageOfEvenAges,
//   averageOfOddAges,
// };
// }; //add all of your function names here that you need for the node mocha tests

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [
  { name: "Sam", age: 15 },
  { name: "William", age: 6 },
  { name: "Lucy", age: 13 },
  { name: "Barney", age: 80 },
];

function doubleNums(arr) {
  return arr.map((item) => item * 2);
}

function doubleAges(arr) {
  return arr.map((item) => ({ name: item.name, age: item.age * 2 }));
}

function filterEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}


function filterOver10(arr) {
  return arr.filter((item) => item.age > 10);
}

function findEvenNum(arr) {
  return arr.find((item) => item % 2 === 0);
}

function findEvenAge(arr) {
  return arr.find((item) => item.age % 2 === 0);
}

// function includesEvenNum(arr) {
//   return arr.includes(function(item) {
//     return item % 2 ===0});
// }
// console.log(includesEvenNum(numArray));

// function includesEvenAge(arr) {
//   return arr.includes(item => item.age % 2 === 0);
// }
// // function includesEvenAge1(arr) {
// //   return arr.includes(function(item) { item.age % 2 === 0});
// // }
// // console.log(includesEvenAge(peopleArray));
// // console.log(includesEvenAge1(peopleArray));

function sumOfNumbers(arr) {
  return arr.reduce((a, b) => a + b,0);
}


function sumOfAges(arr) {
  return arr.reduce((a, b) => a + b.age,0);
}

function averageOfNumbers(arr) {
  const sumNums = arr.reduce((a, b) => a + b,0);
  return (sumNums / arr.length).toFixed(2);
}

function averageOfAges(arr) {
  const mapAges = arr.map((item) => item.age);
  const sumAges = mapAges.reduce((a,b)=> a+b);
  return (sumAges / mapAges.length).toFixed(2);
}

function maxOfNumbers(arr) {
  return arr.reduce((a, b) => (a > b ? a : b));
}


function maxOfAges(arr) {
  return arr.map((item) => item.age).reduce((a, b) => (a > b ? a : b));
}

function averageOfEvenNumbers(arr) {
  const evenArray = arr.filter((item) => item % 2 === 0);
  const sumEvenArray = evenArray.reduce((a, b) => a + b,0);
  const average = (sumEvenArray/evenArray.length).toFixed(2);
  return average;
};


function averageOfOddNumbers(arr) {
  const oddNums = arr.filter((item) => item % 2 !== 0);
  const sumOddNums = oddNums.reduce((a, b) => a + b,0);
  return (sumOddNums / oddNums.length).toFixed(2);
}

function averageOfEvenAges(arr) {
  const evenArray = arr.filter((item) => item.age % 2 === 0);
  const evenAgeSum = evenArray.reduce((a,b) => a + b.age,0);
  return (evenAgeSum/evenArray.length).toFixed(2);
}

function averageOfOddAges(arr) {
  const oddArray = arr.filter((item) => item.age % 2 !== 0);
  const oddAgeSum = oddArray.reduce((a,b) => a + b.age,0);
  return (oddAgeSum/oddArray.length).toFixed(2);
}

