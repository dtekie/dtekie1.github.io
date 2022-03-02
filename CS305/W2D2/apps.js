"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests
module.exports = { Calculator }; //add all of your function names here that you need for the node mocha tests

// /**
//  * 
//  * @returns {Accumulator} constructor function
//  */
// function Accumulator(initialValue,increment){
//    this.currentValue = initialValue,
//    accumulat(){
//    this.currentValue = this.currentValue + this.increment;
//    },
//    report(){
//    return this.currentValue;
// }


}

/**
 * @param {number} num1 the first number;
 * @param {number} num2 the second number;
 * @returns {Calculator} this is a constructor function
 
 */
 function Calculator(num1, num2) {
    this.num1 = num1,
    this.num2 = num2,
    this.sum= function() {
          return this.num1 + this.num2;
      },
   this.mul= function () {
          return this.num1 * this.num2;
      };
   }
   const calc = new Calculator(2,3);
      

  console.log(calc.sum());
  console.log(calc.mul());