//basic example of using mocha (test code in same file)
"use strict"; 
const assert=require("assert"); 
/**
 * 
 * @param {number} num - the number to be checked for prime
 * @returns {boolean} true or false
 */
function checkPrime(num){ 
    for(let i=2;i<num;i++)
    if(num%i===0)return false;
return num>1;
}
describe("check Prime returns true if argument isprime",function(){
    it("37 isprime", function(){
        assert.strictEqual(checkPrime(37),true);
    });
    it("77 is not prime",function(){
        assert.strictEqual(checkPrime(77),false);
    });
});
