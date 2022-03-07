"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {
  doubleNums,
  doubleAges,
  filterEven,
  filterOver10,
  findEvenNum,
  findEvenAge,
  includesEvenNum,
  includesEvenAge,
  sumOfNumbers,
  sumOfAges,
  averageOfNumbers,
  averageOfAges,
  maxOfNumbers,
  maxOfAges,
  // averageOfEvenNumbers,
  // averageOfOddNumbers,
  // averageOfEvenAges,
  // averageOfOddAges,
};
// }; //add all of your function names here that you need for the node mocha tests

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

function includesEvenNum(arr) {
  return arr.includes(item % 2 === 0);
}

function includesEvenAge(arr) {
  return arr.includes(item.age % 2 === 0);
}
function sumOfNumbers(arr) {
  return arr.reduce((a, b) => a + b);
}

function sumOfAges(arr) {
  return arr.map((item) => item.age).reduce((a, b) => a + b);
}

function averageOfNumbers(arr) {
  const sumNums = arr.reduce((a, b) => a + b);
  return (sumNums / arr.length).toFixed(2);
}

function averageOfAges(arr) {
  const sumAges = arr.map((item) => item.age).reduce((a, b) => a + b);
  return (sumAges / arr.length).toFixed(2);
}

function maxOfNumbers(arr) {
  return arr.reduce((a, b) => (a > b ? a : b));
}

function maxOfAges(arr) {
  return arr.map((item) => item.age).reduce((a, b) => (a > b ? a : b));
}

// function averageOfEvenNumbers(arr) {
//   const evenElements = arr.filter((item) => item % 2 === 0);
//   const sumOfEven = evenElements.reduce((a, b) => a + b);
//   return (sumOfEven / evenElements.length).toFixed(2);
// }
// const numArray = [5, 0, 7, 77, -20, 300, 51, 2];

// console.log(averageOfEvenNumbers(numArray));
// // const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
// // console.log(averageOfEvenNumbers(numArray));

// function averageOfOddNumbers(arr) {
//   const oddNums = arr.filter((item) => item % 2 !== 0);
//   const sumOddNums = oddNums.reduce((a, b) => a + b);
//   return (sumOddNums / oddNums.length).toFixed(2);
// }
// console.log(averageOfEvenNumbers(numArray));
// console.log(averageOfOddNumbers(numArray));
// const peopleArray = [
//   { name: "Sam", age: 15 },
//   { name: "William", age: 6 },
//   { name: "Lucy", age: 13 },
//   { name: "Barney", age: 80 },
// ];
// console.log(averageOfOddAges(peopleArray));
// function averageOfEvenAges(arr) {
//   const evenArray = arr.filter((item) => item.age % 2 === 0);
//   const evenAge = evenArray.map((item) => item.age);
//   const sumAge = evenAge.reduce((a, b) => a + b);
//   return (sumAge / evenAge.length).toFixed(2);
// }

// console.log(averageOfEvenAges(peopleArray));

// function averageOfOddAges(arr) {
//   return (
//     arr
//       .filter((item) => item.age % 2 !== 0)
//       .map((item) => item.age)
//       .reduce((a, b) => a + b) / (arr.length - 2).toFixed(2)
//   );
// }
