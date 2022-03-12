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
//   includesEvenNum,
//   includesEvenAge,
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
//console.log(doubleNums(numArray))

function doubleAges(arr) {
  return arr.map((item) => ({ name: item.name, age: item.age * 2 }));
}
// //console.log(doubleAges(peopleArray))

function filterEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}
function filterEven(arr) {
  return arr.filter(function(item) {return  item % 2 === 0;});
}
// //console.log(filterEven(numArray));

function filterOver10(arr) {
  return arr.filter((item) => item.age > 10);
}
// console.log(filterOver10(peopleArray));

function findEvenNum(arr) {
  return arr.find((item) => item % 2 === 0);
}
// console.log(findEvenNum(numArray));

function findEvenAge(arr) {
  return arr.find((item) => item.age % 2 === 0);
}
// console.log(findEvenAge(peopleArray));

function includesEvenNum(arr) {
  return arr.includes(item => item % 2 ===0);
}
// // // console.log(includesEvenNum(numArray));

function includesEvenAge(arr) {
  return arr.includes(item => item.age % 2 === 0);
}
// function includesEvenAge1(arr) {
//   return arr.includes(function(item) { item.age % 2 === 0});
// }
// console.log(includesEvenAge(peopleArray));
// console.log(includesEvenAge1(peopleArray));

function sumOfNumbers(arr) {
  return arr.reduce((a, b) => a + b,0);
}
// console.log(sumOfNumbers(numArray));

// console.log("_____age_________");
function sumOfAges(arr) {
  return arr.reduce((a, b) => a + b.age,0);
}
// // function sumOfAges1(arr) {
// //   return arr.reduce((a, b) => a + b.age,0);
// // }
// console.log(sumOfAges(peopleArray));
// // console.log(sumOfAges1(peopleArray));


function averageOfNumbers(arr) {
  const sumNums = arr.reduce((a, b) => a + b,0);
  return (sumNums / arr.length).toFixed(2);
}
// console.log(averageOfNumbers(numArray));


function averageOfAges(arr) {
  const mapAges = arr.map((item) => item.age);
  const sumAges = mapAges.reduce((a,b)=> a+b);
  return (sumAges / mapAges.length).toFixed(2);
}
// console.log(averageOfAges(peopleArray));


function maxOfNumbers(arr) {
  return arr.reduce((a, b) => (a > b ? a : b));
}
// console.log(maxOfNumbers(numArray));


function maxOfAges(arr) {
  return arr.map((item) => item.age).reduce((a, b) => (a > b ? a : b));
}
// console.log(maxOfAges(peopleArray));

function averageOfEvenNumbers(arr) {
  const evenElements = arr.filter((item) => item % 2 === 0);
  const sumEvenElements=evenElements.reduce((a, b) => a + b,0);
  return (sumEvenElements / sumEvenElements.length).toFixed(2);
}
// console.log(averageOfEvenNumbers(numArray));


// //numArray = [5, 0, 7, 77, -20, 300, 51, 2];
// console.log(averageOfEvenNumbers(numArray));

function averageOfOddNumbers(arr) {
  const oddNums = arr.filter((item) => item % 2 !== 0);
  const sumOddNums = oddNums.reduce((a, b) => a + b,0);
  return (sumOddNums / oddNums.length).toFixed(2);
}
// console.log(averageOfOddNumbers(numArray));

function averageOfEvenAges(arr) {
  const evenArray = arr.filter((item) => item.age % 2 === 0);
  //const evenAge = evenArray.map((item) => item.age);
  return evenArray.reduce((a, b) => a + b.age,0);
}
// function averageOfEvenAges(arr){
//   const evenAges = arr.map(item => item.age%2 ===0);
//   const sumAge = evenAges.reduce((a, b) => a + b,0);
//   return (sumAge / evenAges.length).toFixed(2);
// }
// console.log(averageOfEvenAges(peopleArray));

// console.log(averageOfEvenAges(peopleArray));

function averageOfOddAges(arr) {
  return (
    arr
      .filter((item) => item.age % 2 !== 0)
      .map((item) => item.age)
      .reduce((a, b) => a + b) / (arr.length - 2).toFixed(2)
  );
}
// console.log(averageOfOddAges(peopleArray));
