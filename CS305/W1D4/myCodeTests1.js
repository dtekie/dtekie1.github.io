"use strict";
const assert = require("assert");
const functionsModule = require("./functions1.js");
/* import from functions.js module */
const maxThree=functionsModule.maxThree;
describe("check the maximum of three numbers",function(){
    it("11 is the max of the three", function(){
        assert.strictEqual(maxThree(10,9,11),11);
    });
    it("12 is the max of three",function(){
        assert.strictEqual(maxThree(7,12,9),12);
    });
});
// //#2a
const sum=functionsModule.sum;
describe("calculate the sum of the elements of the array",function(){
    it("sum: 10", function(){
        assert.strictEqual(sum([1,2,3,4]),10);
    });
    it("sum: 14",function(){
        assert.strictEqual(sum([1,0,15,-2]),14);
    });
});
// //#2b
const multiply=functionsModule.multiply;
describe("check the product of three numbers",function(){
    it("24 is the product of the numbers", function(){
        assert.strictEqual(multiply([1,2,3,4]),24);
    });
    it("120 is the product",function(){
        assert.strictEqual(multiply([1,2,3,4,5]),120);
    });
});
// //#3
const findLongestWord=functionsModule.findLongestWord;
describe("check the length of the longest word in an array",function(){
    it("the longest length of the word is 4", function(){
        assert.strictEqual(findLongestWord(["you","are","fast"]),4);
    });
    it("the longest length of the word is 6",function(){
        assert.strictEqual(findLongestWord(["my","name","is","Daniel"]),6);
    });
});

// //#4a
const reverseArray=functionsModule.reverseArray;
describe("reverse the elements of an array",function(){
    it("the reversed array is: ", function(){
        assert.deepStrictEqual(reverseArray(["you","are","fast"]),["fast","are","you"]);
    });
    it("the reversed array is: ",function(){
        assert.deepStrictEqual(reverseArray([1,2,3]),[3,2,1]);
    });
});
// //#4b
const reverseArrayInPlace=functionsModule.reverseArrayInPlace;
describe("reverse the elements of an array",function(){
    it("the reversed array is: ", function(){
        assert.deepStrictEqual(reverseArrayInPlace(["you","are","fast"]),["fast","are","you"]);
    });
    it("the reversed array is: ",function(){
        assert.deepStrictEqual(reverseArrayInPlace([1,2,3]),[3,2,1]);
    });
});

// //#5
const scoreExams=functionsModule.scoreExams;
describe("conting the scores of a student",function(){
    it("the scores of the students: ", function(){
        assert.deepStrictEqual(scoreExams([[1, 1, 2, 4],[2, 1, 2, 2],[3, 1, 3, 4]],[3, 1, 2, 4]),[3,2,3]);
    });
});
//#6
const generateArray = functionsModule.generateArray;
describe("generate an array from the two input numbers", function () {
  it("the generated array is: ", function () {
    assert.deepStrictEqual(generateArray(3, 3), [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
  it("the generated array is: ", function () {
    assert.deepStrictEqual(generateArray(2, 3), [
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
  it("the generated array is: ", function () {
    assert.deepStrictEqual(generateArray(2, 1), [[1], [2]]);
  });
});

describe("calculate the sum of the elements of the array",function(){
    it("sum: 10", function(){
        assert.strictEqual(sum([1,2,3,4]),10);
    });
    it("sum: 14",function(){
        assert.strictEqual(sum([1,0,15,-2]),14);
    });
});
