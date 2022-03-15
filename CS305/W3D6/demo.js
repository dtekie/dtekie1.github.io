"use strict";
/* eslint-disable*/
// // let head = {
// //     glasses: 1
// //   };

// //   let table = {
// //     pen: 3,
// //     __proto__: head
// //   };

// //   let bed = {
// //     sheet: 1,
// //     pillow: 2,
// //     __proto__: table
// //   };

// //   let pockets = {
// //     money: 2000,
// //     __proto__: bed
// //   };

// //   console.log( pockets.pen ); // 3
// //   console.log( bed.glasses ); // 1

// //   let animal = {
// //     eats: true,
// //   };

// //   let rabbit = {
// //     name: "White rabbit",
// //     __proto__: animal
// //   };
// //   console.log(rabbit.name);
// //   console.log(rabbit.eats);

// const transactionsDB = [
//   { customerId: 1, customerTransactions: [10, 50, -40] },
//   { customerId: 2, customerTransactions: [10, 10, -10] },
//   { customerId: 3, customerTransactions: [5, -5, 55] },
// ];
// function getIndividualBalance(transactionsDB){
// for (let trans of transactionsDB){
//     let sum = 0;
//     for ( let elem of trans.customerTransactions){
//         sum += elem;
//     }
//     console.log(sum);
// }
//     //console.log(sum);
// }
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();
// delete rabbit.eats;
// console.log(rabbit.eats);
// let rabbit1 = new Rabbit();
// console.log(rabbit1.eats);

// function User(name) {
//   this.name = name;
// }
// User.prototype = {}; // (*)

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// console.log( user.name ); // undefined
// console.log( user2.name ); // undefined

// let arr = [1, 2, 3];

// // it inherits from Array.prototype?
// console.log( arr.__proto__ === Array.prototype ); // true

// // then from Object.prototype?
// console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// // and null on the top.
// console.log( arr.__proto__.__proto__.__proto__ ); // nullfunction Person(name, age)
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.describe = function(){
//     return this.name + ", " + this.age + " years old.";
// }
// const person1 = new Person("Daniel",48);
// console.log(person1.describe());

// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log( rabbit.eats ); // true
// console.log( Rabbit.prototype.eats ); 

// console.log( rabbit.eats ); // true
// function makeCounter() {
//   let count = 0;
//   return function(increment) {
//   if (increment === undefined) {
//   count = count + 1;
//   } else {
//   count = count + increment;
//   }
//   if (increment > 3) {
//   return "warning increment was by value greater than 3 "
//   } else {
//   return count;
//   }
//   }
//   }
  
//   const counter = makeCounter();
//   console.log(counter());
//   console.log(counter(2));
//   console.log(counter(10));

function area() { 
  return this.side * this.side 
} 
function Square(side){//IMPLEMENTATION NEEDED 
  this.side = side;
}
Square.prototype = protoSquare;
const square1 =  {side: 5};//IMPLEMENTATION NEEDED 
class Square2 {
  consttructor(side){
    this.side = side;
  }
  area(){//IMPLEMENTATION NEEDED
    return this.size * this.size;
  } 
}
class Square2{
  constructor(){
    
  }
}
  console.log("expect 25: ", square1.area()); 
  console.log("expect 1: ", Object.getOwnPropertyNames); 
  const constSquare1 = new Square(7); 
  console.log("expect 49: ", constSquare1.area()); 
  console.log("expect 1: ", Object.getOwnPropertyNames)
  const classSquare = new Square2(10); console.log("expect 100: ",)
  console.log("expect 1: ", classSquare.area ()); 
  Object.getOwnPropertyNames (square1).length; 
  console.log("expect: 1 ", Object.getOwnPropertyNames(classSquare).length);

