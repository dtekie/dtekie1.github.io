"use strict";
/*eslint-disable*/ 

// // /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// // module.exports = { ucFirst, getMaxSubSum, truncate , camelize}; //add all of your function names here that you need for the node mocha tests

function ucFirst(str) {  
return str.charAt(0).toUpperCase() + str.slice(1);
}
// }
// // function checkSpam(str) {
// // }
function truncate(str, maxlength) {
    if (maxlength > str.length){
      return str;
    }
    else {
    return str.slice(0,maxlength);
    } 
  }
// }

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
  function getMaxSubSum(arr) {
    let maxSum = 0;
    let subSum = 0;
    for (let item of arr) {
      subSum += item; 
      maxSum = Math.max(maxSum, subSum); 
      if (subSum < 0) subSum = 0; 
    }
    return maxSum;
}
console.log(getMaxSubSum([1, 2, 3]));
function extractCurrencyValue(amount){
  let extractedAmount = amount.slice(1,amount.length)
  return parseInt(extractedAmount); 
}

function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0]
      .toUpperCase() + word.slice(1)
      )
      .join(''); 
  }
