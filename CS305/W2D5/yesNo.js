
"use strict";
/*eslint-disabled*/

const prompt = require("prompt-sync")();

function ask(question, yes, no) {
    question = prompt("do you agree ? ",yes, no);
    if (question ==="yes"){
        showOk();
    }
    else{
        showCancel();
    }
}
function showOk() {
 console.log ( "You agreed." );
}
function showCancel() {
 console.log ( "You canceled the execution." );
}
// ask("Do you agree?", showOk, showCancel);
//4. replace the showCancel and showOk function declaration with arrow functions in the ask call
//const prompt = require("prompt-sync")();
function ask1(question, yes, no) {
question = prompt("do you agree ? ", yes, no);
if (question === "yes"){
    showOk1();
}
else {
    showCancel1();
}
}
const showOk1 = () => console.log("you agreed");
const showCancel1 = () => console.log("you cancelled the execution")
console.log(ask1("Do you agree?", showOk, showCancel));
