"use strict";
/* global assert Accumulator  Calculator*/
/* */
// const assert = require("assert");  //always need this with node
// const myExports = require("./apps.js");  //with node need the name of your file with your functions here
// const Accumulator = myExports.Accumulator;  //do this for all of the functions used in the Mocha tests
// const Calculator = myExports.Calculator;  //do this for all of the functions used in the Mocha tests


describe("calculator from constructor function", function () {
    let calc;  
    before(function () {
        calc = new Calculator();
        calc.setValues(20, 30);
    });

    it("when 20 and 30 are entered, the sum is 50", function () {
        assert.strictEqual(calc.num1, 20);
        assert.strictEqual(calc.num2, 30);
        assert.strictEqual(calc.sum(), 50);
    });

    it("when 20 and 30 are entered, the product is 600", function () {
        assert.strictEqual(calc.num1, 20);
        assert.strictEqual(calc.num2, 30);
        assert.strictEqual(calc.mul(), 600);
    });
});


describe("accumulator", function () {


    it("checks initialValue and increment", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.currentValue, 5);
        assert.strictEqual(accumulator.increment, 10);
    });

    it("checks accumulate", function () {
        const accumulator = new Accumulator(5, 10);
        accumulator.accumulate();
        accumulator.accumulate();
        assert.strictEqual(accumulator.currentValue, 25);
        assert.strictEqual(accumulator.increment, 10);
    });    

    it("checks report", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.report(), 5);
    });    

});