 "use strict";

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
console.log(isVowel("b"));