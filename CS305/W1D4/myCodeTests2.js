//suppose have many functions to test and want tests in separate file
"use strict";
const assert = require("assert");
const functionsModule = require("./functions2.js");
//const functions=functionsModule.functions;
/* import from functions.js module */

// const checkPrime=functionsModule.checkPrime;
// //const ssReverse=functionsModule.ssReverse;
// describe("check Prime returns true if argument is prime",function(){
//     it("37 is prime", function(){
//         assert.strictEqual(checkPrime(37),true);
//     });
//     it("77 is not prime",function(){
//         assert.strictEqual(checkPrime(77),false);
//     });
// });

const isVowel = functionsModule.isVowel;
describe("isVowel returns true if argument is a vowel", function () {
  it("a is vowel", function () {
    assert.strictEqual(isVowel("a"), true);
  });
  it("b is vowel", function () {
    assert.strictEqual(isVowel("b"), false);
  });
});

const calcDistance = functionsModule.calcDistance;
describe("calcDistance returns true if argument is a distance", function () {
  it("distance is 0", function () {
    assert.strictEqual(calcDistance("a"), true);
  });
  it("b is vowel", function () {
    assert.strictEqual(calcDistance("b"), false);
  });
});

// describe("ssReverse", function () {
//     it("[1, 2, 3, 4]", function () {
//         //test array equality
//         assert.deepStrictEqual(ssReverse([1, 2, 3, 4 ]), [4,3,2,1] );
//     });
// });
