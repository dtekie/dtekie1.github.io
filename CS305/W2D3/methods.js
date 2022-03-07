"use strict";
/* eslint-disable*/

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {
  groupById,
  unique,
  filterRangeInPlace,
  filterRange,
  Calculator,
  convertToArrayOfNames,
  copySorted,
  sortDescending,
  sortByAge,
  getAverageAge,
}; //add all of your function names here that you need for the node mocha tests

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

function sortDescending(a, b) {
  return a > b ? -1 : a < b ? 1 : 0;
}
let arr = [1, 29, 10, 7, 0, 100];
console.log(arr.sort(sortDescending));

function copySorted(arr) {
  let sortedArray = [...arr];
  return sortedArray.sort();
}
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

function convertToArrayOfNames(arr) {
  return users.map((item) => item.name);
}

let usersMapped = users.map((item) => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,
}));
console.log(usersMapped);

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

arr = [pete, john, mary];

sortByAge(arr);

// now sorted is: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

arr = [john, pete, mary];
console.log(sortByAge(arr));
