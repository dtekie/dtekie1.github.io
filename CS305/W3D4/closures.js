"use strict";
/*eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {inBetween, inArray, byField, makeArmy}; //add all of your function names here that you need for the node mocha tests


// /**
//  * 
//  * @param {Array} arr holding values
//  * @returns {Function} returns a function that tests whether its argument is in the arr
//  * 
//  */
function inArray(arr) {
    return function(x) {
      return arr.includes(x);
      }
    }
let arr = [1, 2, 3, 4, 5, 6, 7];    
console.log( arr.filter(inArray([1, 2, 7,10])) ); // 1,2

// /**
//  * 
//  * @param {number} low is bottom of range
//  * @param {number}  high is top of range
//  * @returns {Function} returns a function that tests whether its argument is inside the range
//  * 
//  */
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// /**
//  * 
//  * @param {String} fieldName is a property on object to be sorted
//  * @returns {Function} sorting function
//  */
function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
    console.log(users.sort(byField('name')));
    console.log(users.sort(byField('age')));


// /**
//  * @returns {Function} closure that returns it's number
//  */
function makeArmy() {

    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { // shooter function
        //console.log( i ); // should show its number
        return i;
      };
      shooters.push(shooter);
    }
    return shooters;
  }
  let army = makeArmy();
  
  army[0](); // 0
  army[5](); // 5