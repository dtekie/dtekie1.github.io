"use strict";
/*eslint-disable*/
// let a, b, c;  a = {x:1, y:2, z:3}; 
// b = {...a };
// b.x = 100;
// c = {u: 10, v: 20, w: 30}; 
// console.log(b); // {x:1, y:2, z:3} b.x console.log(a) // {x:1, y:2, z:3} console.log(b) // {x:100, y:2, z:3}
// let combined = {...b, ...c};
// console.log(combined);
// let user = {
//     firstName: "John"
//   };
  
//   function func() {
//     console.log(this.firstName);
//   }
  
//   let funcUser = func.bind(user);
//   funcUser(); // John

//   user = {
//     firstName: "John"
//   };
  
//   function func(phrase) {
//     console.log(phrase + ', ' + this.firstName);
//   }
  
//   // bind this to user
//   funcUser = func.bind(user);
  
//   funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)

let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  let sayHi = user.sayHi.bind(user); // (*)
  // can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!