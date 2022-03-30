"use strict";
/*eslint-disable*/
// let sum = (a,b,c) => (a+b+c);
// let sum2 = (a,b,c) => {return a+b+c};
// console.log(sum2(1,2,3));
// // what will appear in the console when this code runs
// function foo(a,b){
//     console.log(a);
//     console.log(b);
// }
// foo(1);//1,undefined
// const a = 5;
// const b = 6;
// foo();//undefined,undefined
// foo(1,2,3,4)//1,2
// //what does the ff log to the console
// function foo2(a,b,c){
//     let sum  = a+b+c;
// }
// console.log(foo2(1,2,3));//undefined
// //rewrite the following expression as an arrow expression
// const sum3 = function (a,b,c){
//     return a+b+c;
// }
// //console.log(sum3(1,2,3));
// const sumArrowVersion = (a,b,c) => (a+b+c);
//console.log(sumArrowVersion(1,2,3));
// let x1 = "blue";
// let x2 ="red";
// console.log("Before...")
// console.log("x1 = " +x1);
// console.log("x2 = " +x2);
//let arr = ["blue", "red"];
// console.log("Befor...")
// let [x2,x1]=["blue","red"];
// console.log(x1,x2);
// [x1,x2] = ["blue","red"];
// console.log("After...")
// console.log(x1,x2);
// let prompt = require('prompt-sync')();
// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
//     mul() {
//       return this.a * this.b;
//     },
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   console.log( calculator.sum() );
//   console.log( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       console.log( this.step );
//       return this;
//     }
//   };
  
//   let result = ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// console.log(result);

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
  
//   console.log(user.name); // Jack
//   console.log(user.isAdmin); // false


// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// console.log( new A() == new B() ); // true


// /*  Create 3 objects, student1, student2, student3
//  property studentId :  s101, s102, s103 respectively
// property quiz answers:  [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] 
// respectively push the students into an array, quiz
//  write a function, gradeQuiz, that takes the quiz array 
// and an array of correct answers, e.g., [3,1,2,4] and 
// returns an object that has properties with the names 
// of each studentId and the value of the property will be 
// their score on the quiz (one point for each correct answer)
//  expect   { s101: 3, s102: 2, s103: 3 }
// */

// const student1 = {studentId: "s101", quizAnswers: [1,1,2,4]};
// const student2 = {studentId: "s102", quizAnswers: [2,1,2,2]};
// const student3 = {studentId: "s103", quizAnswers: [3,1,3,4]};

// const quiz = [student1, student2, student3];
// const answers = [3, 1, 2, 4];

// function gradeQuiz(quizArray, answers) {
//     //const grades = {}; //need the object to return
//     const grades = [];
//     // loop through the array of students and grade their answers
//     for (const student of quizArray) {
//         const studentScore = scoreStudent(student, answers);
//         grades[student.studentId] = studentScore;
//         //const stuId = student.studentId;
//         //grades.push({stuId, studentScore});
//     }
//     return grades;
// }

// function scoreStudent(student, answers) {
//     let score = 0;
//     for (let i = 0; i < answers.length; i++) {
//         if (student.quizAnswers[i] === answers[i]) {
//             score ++;
//         }
//     }
//     return score;
// }

// console.log("quiz results are: ", gradeQuiz(quiz, answers));
// const numbers = { one: 1, two: 22, three: 333, four: 444 }; 
// const properties = ["one", "two", "three", "four"]; 
//write a for loop to print out the values of the properties in numbers.  
//You must use the properties array to access the values.  
// You cannot directly write console.log(numbers.one)  …
// for (let prop of properties){
//     console.log(numbers[prop]);
// }

// let x = 5; 
// let y = {x}; 
// console.log(y); 

// function sum(arr){
//     let tot = 0;  
//     for(let i = 0; i < arr.length; i++){
//         tot+= arr[i]; 
//     } 
//     return tot;
// }
// //let exports = {sum};
// console.log(exports = {sum }); 
// console.log(exports.sum); 
// console.log(exports.sum([1,2,3] ));

// let pt1 = {x:1 , y:2}; 
// let pt2 = {x:1 , y:2}; // two independent objects 
// console.log( pt1 == pt2); // false
// console.log(pt1 === pt2);// false
// console.log(pt1.x == pt2.x) // true
// console.log(pt1.x === pt2.x) // true

// const user = { name: "John" }; 
// user.age = 25; // (*) 
// console.log( user.age); 
// user.name = "Fred"; // 25 
// console.log(user.name); //’Fred’
// user = {name: "Daniel"};//typeError: assignment to a constant variable
// console.log(user);

// const manager = {
//     name: "John",
//     age: 27,
//     job: "Software Engineer",
//     sayHi: sayHowdy
//   };
//   const intern= {
//     name: "Ben",
//     age: 21,
//     job: "Software Engineer Intern",
//     sayHi: sayHowdy
//   };
  
//   /**
//    * @returns {undefined} 
//    */
//   function sayHowdy() {
//      //IMPLEMENT THIS
//      const output = "Hello, my name is " + this.name + 
//      ". I am " + this.age + ".  My job is " + this.job + ".";
//      console.log(output);
//   }
  
//   // add sayHi function to both objects
//   manager.sayHi = sayHowdy;
//   intern.sayHi = sayHowdy;

  
//   manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
//   intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'

// /**
//  * @returns {undefined}
//  */
// const foo = 45; 
// const bar = "" + foo; 
// const bar2 = "" + 108; 
// const bar3 = foo.toString (); 
// const bar4 = 108..toString();  //need both periods after number 
// const bar5 = foo + "";
// console.log( typeof foo === "number"); 
// console.log( typeof bar === "string"); 
// console.log( typeof bar2 === "string"); 
// console.log( typeof bar3 === "string"); 
// console.log( typeof bar4 === "string"); 
// console.log( typeof bar5 === "string"); 

// let str = 'Widget with id'; 
// console.log( str.indexOf('Widget') );
// console.log( str.indexOf('widget') );
// console.log( str.indexOf('id') );
// let str1 = 'Hi';

// //str1[0] = 'h'; // error
// console.log( str1[0] ); // doesn't work

// ["Bilbo", "Gandalf", "Nazgul"].forEach ((item, index, array) => { console.log (`${item} is at index ${index} in ${array}`); });
// //(function(character){console.log(character)} ); 
// function evenElements(number){
//     if (number%2 === 0){
//         return number;
//     }
// }
// const team = [ "Bob", "Fred", "Jim"];
// let [bob, fred, jim] =team;
// console.log(bob);
// console.log(fred);
// console.log(jim);

// let {height, width, title} = { title: "Menu", height: 200, width: 100 };
// console.log(height);
// function scotland(){
//     let aberdeen = {
//         origin: true,
//         expression: function(){
//             console.log(this);
//         }
//     }
//     let innerFun = aberdeen.expression;
//     innerFun();
//     aberdeen.expression();
// }
// scotland();

// let hamster = {
//     stomach: [],
  
//     eat(food) {
//         this.stomach = [food];
//       //this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster
//   };
  
//   let lazy = {
//     __proto__: hamster
//   };
  
//   // This one found the food
//   speedy.eat("apple");
//   console.log( speedy.stomach ); // apple
  
//   // This one also has it, why? fix please.
//   console.log( lazy.stomach ); // apple
// shows "Hello!" after 1 second
// repeat with the interval of 2 seconds
/*Write a function printNumbers(from, to) that 
outputs a number every second, starting from 
from and ending with to.
Make two variants of the solution.
Using setInterval.
Using nested setTimeout.
*/
// function printNumbers(from, to) {
//     let current = from;
//     let timerId = setInterval(function() {
//       console.log(current);
//       if (current == to) {
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }
  
  // usage:
  //printNumbers(5, 10);

  function Person(name){
    console.log('person1 this: ', this);
    this.name = name;
    console.log('Person2 this: ',this);
}
function Doctor(name, department){
    console.log(this);
    Person.call(this,name,department);
    console.log(this);
    this.department = department;
}
Doctor.prototype.report = function(){
    return "medical report";
}
function Surgeon(name, department){
    console.log(this);
    Doctor.call(this, name, department);
    console.log(this);
}
Surgeon.prototype.operate = function(){
    return "operation performed";
}
Surgeon.prototype.__proto__=Doctor.prototype;
let surg1 = new Surgeon("Fred", "Cardiology");
console.log(surg1.dept);
console.log(surg1.name);
console.log(surg1.report());
console.log(surg1);
console.log(surg1.__proto__);
console.log(surg1.prototype);
console.log(Surgeon.__proto__);
console.log(Surgeon.prototype);
console.log(Surgeon.prototype.__proto__);


 