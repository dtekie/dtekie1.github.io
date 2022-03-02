"use strict";

const calculator = {
  setValues(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  },
  sum: function () {
    return this.num1 + this.num2;
  },
  mul: function () {
    return this.num1 * this.num2;
  },
};
calculator.setValues(2, 3);
// console.log(calculator.sum());
// console.log(calculator.mul());

// let ladder = {
//     step: 0,
//     up: function() {
//     this.step++;
//     return this;
//     },
//     down() {
//     this.step--;
//     return this;
//     },
//     showStep() {
//     console.log( this.step );
//     return this.step;
//     }
//     };
//     console.log(ladder.up().up().down().up().down().showStep()); // 1

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */

//module.exports = { calculator }; //add all of your object names here that you need for the node mocha tests
