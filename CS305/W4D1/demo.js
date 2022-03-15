"use strict";
/*eslint-disable*/
// let arr1=[1,10];
// let arr2 = [1,10];
// let arr3 = arr1;
// console.log(arr1===arr2);// false
// console.log(arr2===arr3);//false
// console.log(arr1===arr3);//true
// console.log(arr1==arr2);//true
// console.log(arr2==arr3);//true
// console.log(arr1==arr3);//true
// console.log(arr2[1]==arr3[1]);//true
// console.log(arr2[1]===arr3[1]);//true

// class User {
//   constructor(name) { this.name = name; }
//   sayHi() { console.log(this.name); }
// }
// class Animal{
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   setfullName(){
//     this.fullName = `${this.firstName} ${this.lastName}`; 
//   }
//   getfullName(){
//     return this.fullName; 
//   }
// }
// let animal = new Animal("Shashu", "Michot");
// animal.setfullName();
// console.log(animal.getfullName());

class Counter{
  constructor(){
    this._count = 0;
  }
  up(){
    return this._count++;
  }
  down(){
    return this._count--;
  }
}
let counter = new Counter();
console.log(counter.up());
console.log(counter.up());
console.log(counter.down());



  
  
  