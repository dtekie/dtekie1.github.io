
"use strict";
/**
 * calculate the distance.
 * @param {number} xvalue1 - the first x coordinate.
 * @param {number} xvalue2 - the second x coordinate.
 * @param {number} yvalue1 - the second y coordinate.
 * @param {number} yvalue2 - the second y coordinate.
 * @returns {number} distance
 */
function calcDistance(xvalue1,xvalue2,yvalue1,yvalue2) {
    let distance = Math.sqrt(Math.pow(xvalue2-xvalue1,2) + Math.pow(yvalue2-yvalue1,2));
    return distance;
}
console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));