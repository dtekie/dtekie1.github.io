"use strict";
//global assert doubleNums  doubleAges filterEven filterOver10 findEvenNum findEvenAge */
//comment out the node specific code when going to the browser
// const assert = require("assert"); //always need this with node
// const myExports = require("./arrayPractice.js"); //with node need the name of your file with your functions here
// const doubleNums = myExports.doubleNums; //do this for all of the functions used in the Mocha tests
// const doubleAges = myExports.doubleAges;
// const filterEven = myExports.filterEven;
// const filterOver10 = myExports.filterOver10;
// const findEvenNum = myExports.findEvenNum;
// const findEvenAge = myExports.findEvenAge;
// const includesEvenNum = myExports.includesEvenNum;
// const includesEvenAge = myExports.includesEvenAge;
// const sumOfNumbers = myExports.sumOfNumbers;
// const sumOfAges = myExports.sumOfAges;
// const averageOfNumbers = myExports.averageOfNumbers;
// const averageOfAges = myExports.averageOfAges;
// const maxOfNumbers = myExports.maxOfNumbers;
// const maxOfAges = myExports.maxOfAges;
// const averageOfEvenNumbers = myExports.averageOfEvenNumbers;
// const averageOfOddNumbers = myExports.averageOfOddNumbers;
// const averageOfEvenAges = myExports.averageOfEvenAges;
// const averageOfOddAges = myExports.averageOfOddAges;

let numArray;
let peopleArray;

describe("map practice", function () {
  beforeEach(function () {
    numArray = [5, 0, 7, 77, -20, 300, 51, 2];
    peopleArray = [
      { name: "Sam", age: 15 },
      { name: "William", age: 6 },
      { name: "Lucy", age: 13 },
      { name: "Barney", age: 80 },
    ];
  });

  it("doubles an array of numbers", function () {
    assert.deepEqual(doubleNums(numArray), [10, 0, 14, 154, -40, 600, 102, 4]);
    assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]); //test for pure function
  });

  it("doubles age", function () {
    assert.deepEqual(doubleAges(peopleArray), [
      { name: "Sam", age: 30 },
      { name: "William", age: 12 },
      { name: "Lucy", age: 26 },
      { name: "Barney", age: 160 },
    ]);
    assert.deepEqual(peopleArray, [
      { name: "Sam", age: 15 },
      { name: "William", age: 6 },
      { name: "Lucy", age: 13 },
      { name: "Barney", age: 80 },
    ]);
  });
});

  describe("filter practice", function () {
    beforeEach(function () {
      numArray = [5, 0, 7, 77, -20, 300, 51, 2];
      peopleArray = [
        { name: "Sam", age: 15 },
        { name: "William", age: 6 },
        { name: "Lucy", age: 13 },
        { name: "Barney", age: 80 },
      ];
    });

    it("filter all even numbers", function () {
      assert.deepEqual(filterEven(numArray), [0, -20, 300, 2]);
      assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]); //test for pure function
    });

    it("filter all age > 10", function () {
      assert.deepEqual(filterOver10(peopleArray), [
        { name: "Sam", age: 15 },
        { name: "Lucy", age: 13 },
        { name: "Barney", age: 80 },
      ]);
    });

    it("find even", function () {
      assert.strictEqual(findEvenNum(numArray), 0);
      assert.strictEqual(findEvenNum([1, 3, 801]), undefined);
    });
    it("find even age ", function () {
      assert.deepEqual(findEvenAge(peopleArray),{ name: "William", age: 6 }); 
      const peopleOddAge = [
        { name: "Sam", age: 15 },
        { name: "Lucy", age: 13 },
        { name: "Barney", age: 81 },
      ];
      assert.deepEqual(findEvenAge(peopleOddAge), undefined);
    });

    it("includes even number", function () {
      assert.strictEqual(numArray.includesEvenNum(300), true);
      assert.strictEqual(numArray.includesEvenNum(15), false);
    });
    it("includes even ages", function () {
      assert.strictEqual(peopleArray.includesEvenAge(6), true);
      assert.strictEqual(peopleArray.includesEvenAge(15), false);
    });
  });
  
    describe("reduce practice", function () {
      beforeEach(function () {
        numArray = [5, 0, 7, 77, -20, 300, 51, 2];
        peopleArray = [
          { name: "Sam", age: 15 },
          { name: "William", age: 6 },
          { name: "Lucy", age: 13 },
          { name: "Barney", age: 80 },
        ];
      });
      it("sum of numbers ", function () {
        assert.deepEqual(sumOfNumbers(numArray), 422);
        const anotherNumArray = [1, 2, 3, 4, 5];
        assert.deepEqual(sumOfNumbers(anotherNumArray), 15);
      });

      it("sum of ages", function () {
        assert.deepEqual(sumOfAges(peopleArray), 114);
      });

      it("average of numbers ", function () {
        assert.deepEqual(averageOfNumbers(numArray), 52.75);
      });

      it("average of ages ", function () {
        assert.deepEqual(averageOfAges(peopleArray), 28.5);
      });

      it("maximum of the numbers ", function () {
        assert.deepEqual(maxOfNumbers(numArray), 300);
      });

      it("maximum of ages ", function () {
        assert.deepEqual(maxOfAges(peopleArray), 80);
      });

      it("average of even numbers ", function () {
        assert.deepEqual(averageOfEvenNumbers(numArray), 70.5);
        const oddArray = [1, 3, 5, 7, 9];
        assert.deepEqual(averageOfEvenNumbers(oddArray), undefined);
      });

      it("average of odd numbers ", function () {
        assert.deepEqual(averageOfOddNumbers(numArray), 35.00);
        const evenArray = [2, 4, 6];
        assert.deepEqual(averageOfOddNumbers(evenArray), undefined);
      });

      it("Even ages average ", function () {
        assert.deepEqual(averageOfEvenAges(peopleArray), 43.00);
        const peopleOddAge = [
          { name: "Sam", age: 15 },
          { name: "Lucy", age: 13 },
          { name: "Barney", age: 81 },
        ];
        assert.deepEqual(averageOfEvenAges(peopleOddAge), undefined);
      });
      it("Odd ages average ", function () {
        assert.deepEqual(averageOfOddAges(numArray), 14);
        const peopleOddAge = [
          { name: "Sam", age: 15 },
          { name: "Lucy", age: 13 },
          { name: "Barney", age: 81 },
        ];
        assert.deepEqual(averageOfOddAges(peopleOddAge), undefined);
      });
    });
  

