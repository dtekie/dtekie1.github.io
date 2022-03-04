"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {number} initialValue the first value
 * @param {number} increment the value to be added
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment) {
  (this.currentValue = initialValue),
    (this.increment = increment),
    (this.accumulate = function () {
      this.currentValue = this.currentValue + this.increment;
    }),
    (this.report = function () {
      return this.currentValue;
    });
}

/**
 * @param {number} num1 the first number;
 * @param {number} num2 the second number;
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
  (this.setValues = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }),
    (this.sum = function () {
      return this.num1 + this.num2;
    }),
    (this.mul = function () {
      return this.num1 * this.num2;
    });
}
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests
