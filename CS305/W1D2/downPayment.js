
"use strict";
/*eslint-disable
*/
/* #3. Defining table:
Input:	
    cost of the house	
    
Process:  
    Calculate down payment as some percentage of 
    the cost of the house:
    for costs below 50,000
        downpayment = houseCost * 0.05
    for costs below 50,000
        downpayment = houseCost * 0.05;down
    for costs between 50,000 and 100,000
         downpayment = 2500 + (houseCost - 50_000) * 0.10
    for costs between 100,000 and 200,000
        downpayment = 7500 + (houseCost - 100_000) * 0.15
    for costs above 200,000
        downpayment = 20_000 + (houseCost - 200_000) * 0.10

output: down payment
*/

function calcDownpayment(houseCost){
    let downpayment = 0;
    if (houseCost < 50_000) {
        downpayment = houseCost * 0.05;
    }
    else if(houseCost < 100_000) {
        downpayment = 2500 + (houseCost - 50_000) * 0.10;
    }
    else if (houseCost < 200_000) {
        downpayment = 7500 + (houseCost - 100_000) * 0.15;
    }
    else {
        downpayment = 20_000 + (houseCost - 200_000) * 0.10; 
    }
    return downpayment;
}

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));