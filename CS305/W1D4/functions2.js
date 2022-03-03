"use strict";

module.exports = { checkPrime };
module.exports = { isVowel };
module.exports = { calcDistance };
module.exports = { compoundInterest };
/**
 * checks for prime number
 * @param {number} number is an integer
 * @returns {boolean} true if prime
 */
function checkPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
 /**
 * check if a letter is a vowel
 * @param {string} letter - the character to be checked for vowel
 * @returns {boolean}  -true if vowel
 */
function isVowel(letter){
    if(letter === "a"
        || letter === "e"
        || letter ==="i"
        || letter ==="o"
        || letter ==="u" ){ 
        return true;
        }
    return false;
    }
/**
 * calculate the distance.
 * @param {number} xvalue1 - the first x coordinate.
 * @param {number} xvalue2 - the second x coordinate.
 * @param {number} yvalue1 - the second y coordinate.
 * @param {number} yvalue2 - the second y coordinate.
 * @returns {number} get the distance between two coordinates
 */
function calcDistance(xvalue1,xvalue2,yvalue1,yvalue2) {
    let distance = Math.sqrt(Math.pow(xvalue2-xvalue1,2) + Math.pow(yvalue2-yvalue1,2));
    return distance;
}

/**
 * calculate balance
 * @param {number} initialAmount is a floating number
 * @param {number} annualInterestRate  is a floating number
 * @param {number} numberOfYears is an integer
 * @returns {number} balance in a floating number
 */
function compoundInterest(
    initialAmount,
    annualInterestRate,
    numberOfYears) {
        let compoundInterest = 0;
        const PERCENTAGE = 100;
        const NUMBER_OF_MONTHS_IN_A_YEAR = 12;
        const MONTHLY_INTEREST_RATE =
        annualInterestRate/NUMBER_OF_MONTHS_IN_A_YEAR/PERCENTAGE.toFixed(2);
        let period = numberOfYears * NUMBER_OF_MONTHS_IN_A_YEAR;
    for (let i = 1; i < period; i++){
            compoundInterest = (initialAmount * MONTHLY_INTEREST_RATE);
            initialAmount = initialAmount + compoundInterest;
    }
    let balance = (initialAmount + compoundInterest).toFixed(2);
    return balance;
}
// console.log("expect 110.47", compoundInterest(100, 10, 1));
// console.log("expect 16470.09", compoundInterest(10000, 5, 10));

/**
 *
 * @param {number} houseCost is a number
 * @returns {number} downpayment is a number
 */
function calcDownpayment(houseCost){
    let downpayment = 0;
    if (houseCost < 50000) {
        downpayment = houseCost * 0.05;
    }
    else if(houseCost < 100000) {
        downpayment = 2500 + (houseCost - 50000) * 0.10;
    }
    else if (houseCost < 200000) {
        downpayment = 7500 + (houseCost - 100000) * 0.15;
    }
    else {
        downpayment = 20000 + (houseCost - 200000) * 0.10;
    }
    return downpayment;
}

console.log("expect 2000: ", calcDownpayment(40000));
// console.log("expect 2500: ", calcDownpayment(50000));
// console.log("expect 7500: ", calcDownpayment(100000));
// console.log("expect 25000: ", calcDownpayment(250000));
