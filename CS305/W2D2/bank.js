"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
*/

const bank = {
  transactionsDB: [],
};
bank.transactionsDB = [
  { customerId: 1, customerTransactions: [10, 50, -40] },
  { customerId: 2, customerTransactions: [10, 10, -10] },
  { customerId: 3, customerTransactions: [5, -5, 55] },
];
/* this is complete, no need to modify.
Saves this amount to the customerTransactions array for customerId id. */
bank.saveTransaction = function (id, amount) {
  const customer = bank.transactionsDB.find(
    (customer) => customer.customerId === id
  );
  customer.customerTransactions.push(amount);
};

bank.debit = function (id, amount) {
  /* make sure current balance is > amount */
  if (bank.balance <= 0) {
    console.log("You don't have sufficient balance");
  } else {
    //bank.balance = bank.balance - amount;
    this.saveTransaction(id, amount);
  }
};

bank.credit = function (id, amount) {
  this.saveTransaction(id, amount);
};

bank.getBalance = function (id) {
  //IMPLEMENT THIS
  this.customer = bank.transactionsDB.find(
    (customer) => customer.customerId === id
  );
  return bank.balance();
};

/**
 * @returns {number}  returns sum of all balances
 */
bank.balance = function () {
  //IMPLEMENT THIS
  bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] }, // 20
    { customerId: 2, customerTransactions: [10, 10, -10] }, // 10
    { customerId: 3, customerTransactions: [5, -5, 55] }, // 55
  ];

  bank.balance = function () {
    let balance = 0;
    for (let i = 0; i < this.transactionsDB.length; i++) {
      for (
        let j = 0;
        j < this.transactionsDB[i].customerTransactions.length;
        j++
      ) {
        bank.balance += this.transactionsDB[i].customerTransactions[j];
      }
    }
    return bank.balance;
  };
  console.log("from bankBalance " + bank.balance());
};

console.log(bank.getBalance(bank.transactionsDB));
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
//module.exports = {bank }; //add all of your object names here that you need for the node mocha tests
