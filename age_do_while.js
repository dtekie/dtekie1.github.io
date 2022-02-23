
//2b. using Do while loop
const prompt = require("prompt-sync")();
let age = prompt("Please enter your age: ");

do {
  age = prompt("Please enter your age: ");
  console.log(`You entered: ${age}. Please enter a vilid age`);
} while (age <= 18);
console.log("exiting...");


