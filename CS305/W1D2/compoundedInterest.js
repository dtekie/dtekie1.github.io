
/* #2. Defining table:
Input:	
    initialAmount
    annualInterest rate
    numberOfYears to compound	
    
Process:  
    Calculate the balance of the saving account as below:
    balance  = initialAmount + compoundedInterest;
    first month: initialAmount + (initialAmount * annualInterestRate/12);
    second month: the new initialAmount = initialAmount + compoundedInterest;
    the process continues until the last month of the last year.

output: balance
*/
/**
 * 
 * @param {*} initialAmount 
 * @param {*} annualInterestRate 
 * @param {*} numberOfYears 
 * @returns 
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
    return (initialAmount + compoundInterest).toFixed(2);
}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));

