"use strict";
//const assert = require("assert");
//const functionsModule = require("./functions.js");
/* import from functions.js module */

//#1
//const double = functionsModule.double;
describe("doubles the number", function () {
  it("double", function () {
    assert.strictEqual(double(10), 20);
  });
  it("doubles the number", function () {
    assert.strictEqual(double(7), 14);
  });
});
//#2
//const times100 = functionsModule.times100;
describe("make the number 100 fold", function () {
  it("multiplys by 100", function () {
    assert.strictEqual(times100(1), 100);
  });
  it("multiplys by 100", function () {
    assert.strictEqual(times100(-2), -200);
  });
});
//#3a
//const myMap = functionsModule.myMap;
describe("maps the elements of the array to their double", function () {
    it("All elements of the array mapped to thier double", function () {
      assert.deepStrictEqual(myMap([1, 2, 3], double), [2, 4, 6]);
    });
    it("All elements of the array mapped to thier double", function () {
      assert.deepStrictEqual(myMap([1, 0, -1], double), [2, 0, -2]);
    });
  });

// //#3b
//const myMap1 = functionsModule.myMap1;
describe("Every element became 100 fold", function () {
  it("Elements mapped to 100 fold", function () {
    assert.deepStrictEqual(myMap([1, 2, 3], times100), [100, 200, 300]);
  });
  it("Elements mapped to 100 fold", function () {
    assert.deepStrictEqual(myMap([0, -1, 10], times100), [0, -100, 1000]);
  });
});

//4
describe("mapping to anonymous and arrow functions", function () {
    it("maps every element to its 3 fold using ananymous function", function () {
    assert.deepStrictEqual(myMap([1,2,3], function(arr) {return arr * 3;}), [3,6,9]);
    });
    it("maps every element to its 3 fold using arrow function", function () {
    assert.deepStrictEqual(myMap([-3,0,100], number => number * 3), [-9, 0, 300]);
    });
    });

