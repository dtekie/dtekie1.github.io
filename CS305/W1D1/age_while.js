//2a. using while loop

const prompt = require("prompt-sync")();

let age = prompt("Please enter your age: ");
while (age <= 18) {
  age = prompt("Please enter your age: ");
  console.log(`You entered: ${age}. Please enter a vilid age`);
}
console.log("exiting...");



