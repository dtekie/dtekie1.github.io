"use strict";
/*eslint-disabled*/
const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [
  { name: "Sam", age: 15 },
  { name: "William", age: 6 },
  { name: "Lucy", age: 13 },
  { name: "Barney", age: 80 },
];

//#1a Double numbers
//#1b Double ages

const ageAverage =
  peopleArray.map((item) => item.age).reduce((a, b) => a + b) /
  peopleArray.length;
console.log(ageAverage);

const doubledNum = numArray.map((item) => item * 2);
console.log(doubledNum);

const doubleAge = peopleArray.map((item) => ({
  name: item.name,
  age: item.age * 2,
}));
console.log(doubleAge);

//filter all even numbers
//filter all age > 10
//find even
//include even
//find age > 10
//include age > 10

const greaterThanTenAge = peopleArray.filter((item) => item.age > 10);
console.log(greaterThanTenAge);
const filteredEvenNumbers = numArray.filter((item) => item % 2 === 0);
console.log(filteredEvenNumbers);
//find even, include even
const findFirstEvenNumber = numArray.find((item) => item % 2 === 0);
console.log(findFirstEvenNumber);
const findFirstEvenAge = peopleArray.find((item) => item.age % 2 === 0);
console.log(findFirstEvenAge);
//reduce
const averageNum = numArray.reduce((a, b) => a + b) / numArray.length;
console.log(averageNum);
const averageAges =
  peopleArray.map((item) => item.age).reduce((a, b) => a + b) /
  peopleArray.length;
console.log(averageAges);
const maxAge = peopleArray
  .map((item) => item.age)
  .reduce((a, b) => (a > b ? a : b));
console.log(maxAge);
const maxNumberArr = numArray.reduce((a, b) => (a > b ? a : b));
console.log(maxNumberArr);

//average ages of people with even number ages
const averageEvenAge =
  peopleArray
    .filter((item) => item.age % 2 === 0)
    .map((item) => item.age)
    .reduce((a, b) => a + b) /
  (peopleArray.length - 2);
console.log(averageEvenAge);

const averageOddAge =
  peopleArray
    .filter((item) => item.age % 2 !== 0)
    .map((item) => item.age)
    .reduce((a, b) => a + b) /
  (peopleArray.length - 2);
console.log(averageOddAge);

const evenElements = numArray.filter((item) => item % 2 === 0);
const sumOfEven = evenElements.reduce((a, b) => a + b);
const averageEvenNum = sumOfEven / evenElements.length.toFixed(2);
console.log(averageEvenNum);