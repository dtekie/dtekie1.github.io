"use strict";
///* "eslist-disable"*/
/**
 * calculate exponent of a number.
 * @param {number} num - the base number
 * @param {number} power - the exponent
 * @returns {number} result - the final value
 */

function pow(num,power){
    let result = 1;
    for (let i = 1; i<= power; i++) {
    result = result * num;
}
return result;
}

// const assert = require("assert");
// describe("pow", function() {
//     it("2 raised to power 3 is 8", function() {
//     assert.equal(pow(2, 3), 8);
//     });

//     it("3 raised to power 3 is 27", function() {
//         assert.equal(pow(3, 3), 27);
//         });
//         });