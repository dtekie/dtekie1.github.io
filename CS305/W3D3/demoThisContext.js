"use strict";
/*eslint-disable*/
// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     console.log( "Hello, " + getFullName() );
//     console.log( "Bye, " + getFullName() );


  
//   }
// //   console.log(sayHiBye("Daniel", "Tekie"));
// //what will appear in the console when this code runs
// function cat(abc){
//   if(!abc){
//     abc = console.log("abc");
//     return abc;
//   }
//   const xyz = console.log("xyz");
//   return xyz;
// }
// console.log((cat()));

// let dog = "dog";
// function morph(){
//   let dog = "cat";
//   let cat = dog;
//   console.log(dog);
//   console.log(cat);
// }
// morph();
// console.log(dog);
// console.log(cat);
// function inOperatorInArrays(arr){
//   let newArr = [];
//   for (let element in arr){
//     newArr.push(element)
//   }
//   return newArr;
// }
// const arr = [{x:1}, {y:6},{z:8}];
// console.log(inOperatorInArrays(arr));

// const player1 = {jersey:8, stats: [{game:1, points:6},{game:2, points:7}]};
// const player2 = {jersey:12, stats: [{game:12, points:16},{game:2, points:14}]};
// const player3 = {jersey:6, stats: [{game:6, points:10},{game:2, points:6}]};
// const teamStats = [player1,player2,player3];
// //a) use a filter method to get an array containing all player objects
// // with jersey numbers greater than 10
// const greaterThanTen = teamStats.filter(item => item.jersey > 10);
// const greaterThanTen1 = teamStats.filter(item => 
//   { if (item.jersey > 10) return true;});
// console.log(greaterThanTen);
// console.log(greaterThanTen1);
// const player3points = player3.stats.map(item =>item.points);
// console.log(player3points);
// const totalPlayer3points = player3points.reduce((a,b)=>a+b);
// console.log(totalPlayer3points);
// let firstName = "John"; 
// function sayHi () { 
//   console.log("Hi, " + firstName); 
// } 
// firstName = "Pete"; sayHi (); // what will it show: "John" or "Pete"? function makeWorker let name = “John"; return function() { alert(name); }; } let name = “Pete"; // create a function let work = () { makeWorker // call it (); work(); // what will it show? “John" (name where created) or “Pete" (name where called)?

// function makeCounter(){
//   let count = 0;
//   return function(){
//     return count++;
//   };
//  }
//   let counter = makeCounter();
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());

// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];

// //Use the map function to map the people array to the following:
// [{ fullName: "John Smith", id: 1 },
// { fullName: "Pete Hunt", id: 2 },]
// let mappedFullNames = people.map(item => ({`"fullName": ${item.name}, id: ${item.id}`}));

// console.log(mappedFullNames);

// let usersMapped = users.map(user => ({
// fullName: `${user.name} ${user.surname}`,
// age: user.age
// }));
// //OR

// const mapped = people.map(function(person) {
// const newObj = {
// fullName: person.name + " " + person.surname,
// age: person.age
// };
// return newObj;
// });
  
// function askPassword(ok, fail) {
//   let prompt = "prompt-sync";
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },

// };

// //askPassword(user.loginOk, user.loginFail);
// //askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// askPassword(() => user.loginOk(), () => user.loginFail());

// function foo(){
//   console.log(this);
// } 
// const bob ={ 
//   log:function(){ 
//     console.log(this); 
//   } 
// }; 
// console.log(this);// this is window in browser ({} in node**) 
// foo();//foo() is called by window object (global in node) 
// bob.log();//log() is called by the object, bob 

// //"use strict"; 
// function a() { 
//   console.log(this);
// } 
// const b = { dog: 'fido', log: function() { 
//   console.log(this);  
// }
// } 
// console.log(this); //{}
// a(); //global-undefined in strict mode
// b.log(); //obj b
// let mylog = b.log;
// mylog (); //global-undefined in strict mode
// let user = { firstName: "john" };

// function func (phrase) { 
//   console.log(phrase + ', ' + this.firstName) 
// }
// // bind this to user 
// let funcUser = func.bind (user);
// funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)
// //console.log(funcUser("Hello"));

const me ={ 
  first:'Tina', 
  last:'Xing', 
  getFullName:function(){ 
    return this.first +' '+ this.last; 
  } 
}

const log =function(height,weight){
  // ‘this’ refers to the invoker 
  console.log(this.getFullName()+ " " + height +' '+ weight); 
}
const logMe=log.bind(me);  

logMe('180cm', '70kg'); // Tina Xing 180cm 70kg 
log.call(me,'180cm','70kg');// Tina Xing 180cm 70kg 
log.apply(me,['180cm','70kg']);// Tina Xing 180cm 70kg 
log.bind(me,'180cm','70kg')(); // Tina Xing 180cm 70kg 