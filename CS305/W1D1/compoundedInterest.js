
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

