"use strict";

const calculator = {
  number1: 2,
  number2: 3,
  sum: function () {
    return this.number1 + this.number2;
  },
  mul: function () {
    return this.number1 * this.number2;
  },
};
console.log(calculator.sum());
console.log(calculator.mul());

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
//module.exports = {calculator }; //add all of your object names here that you need for the node mocha tests
