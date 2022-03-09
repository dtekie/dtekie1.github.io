"use strict";
/*eslint-disable*/
// // let arr= [];
// // //[user.firstName, user.lastName] = "Daniel Tekie".split(" ");
// // [arr[1], arr[0]] = "Daniel Tekie".split(" ");
// // console.log(arr[1]);
// // console.log(arr[0]);
// // console.log(arr);
// // const team = ["Bob","Fred","Jim"];
// // let [bob,fred,jim]=team;
// // console.log(bob);
// // console.log(fred);
// // console.log(jim);

// let options = { title: "Menu", width: 100, height: 200 };
// let {width: w, height: h, title} = options;

// console.log(title);  // Menuconsole.log(w);      // 100console.log(h);      // 200
// console.log(w);  // Menuconsole.log(w);      // 100console.log(h);      // 200
// console.log(h);  // Menuconsole.log(w);      // 100console.log(h);  // 200
// const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al",  center:  "Big Sleep" }
// const {point, shooting, center} = team;
// console.log(point); 
// console.log(shooting); 
// console.log(center); 

// const john = { 
//     name: "John", 
//     surname: "Smith", 
//     isAdmin : false, 
//     birthday: {"year": 2000, "month": "February", "day": 3}, 
//     friends: [0,1,2,3] 
// };
// let newJohn= JSON.stringify(john);
// console.log(newJohn);
// const objJohn = JSONParse(newJohn);
// console.log(objJohn);
// let user = {
//     name: "John",
//     years: 30
//   };

// let {name,years:age,isAdmin = false} = user;
// console.log(user.name);
// console.log(user.age);
// console.log(user.isAdmin);
// let user = {
//     name: "John",
//     age: 30
//   };
  
  // loop over keys-and-values
//   for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}:${value}`); // name:John, then age:30
//   }
//     let guest = "Jane";
//     let admin = "Pete";

// // Let's swap the values: make guest=Pete, admin=Jane
// [guest, admin] = [admin, guest];

// console.log(`${guest} ${admin}`); // Pete Jane (successfully swapped!)
// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };

// let json = JSON.stringify(student);
// console.log(typeof json);
// console.log(json);

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };

// console.log( JSON.stringify(meetup) );
// /* The whole structure is stringified:
// {
//   "title":"Conference",
//   "room":{"number":23,"participants":["john","ann"]},
// }
// */

// stringified array
// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// console.log( numbers[1] ); // 1
// console.log( numbers); // 1

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// user = JSON.parse(userData);

// console.log( user.friends[1] ); // 1
// console.log( user.friends); // 1

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// console.log( meetup.date.getDate() ); // now works!

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;

// schedule = JSON.parse(schedule, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// console.log( schedule.meetups[1].date.getMonth() ); // works!
// let user = {
//   name: "John Smith",
//   age: 35
// };
// const toJson = JSON.stringify(user);
// console.log(toJson);

// const backToObject = JSON.parse(toJson);
// console.log(backToObject);

// function log(){ 
//   console.log("No Arguments"); 
// } 

// function log(x){ 
//   console.log("1 Argument: "+x); 
// } 

// function log(x,y){ 
//   console.log("2 Arguments: "+x +", "+y); 
// } 
// log(); 
//log(5); 
// log(6,7);

// function findMax(){ 
//   let max =-Infinity; 
//   for(let i=0;i<arguments.length;i++){ 
//     if(arguments[i]>max){ 
//       max =arguments[i]; 
//     } 
//   } 
//   return max; 
// } 
// const max1 =findMax(1,123,500,115,66,88); 
// const max2 =findMax(3,6,8,11,10);
// console.log(max1,max2);

// function sum(x,y,...more){
//    //"more" is array of all extra passed params 
//    let total =x +y; 
//    if(more.length>0){ 
//      for(let i=0;i<more.length;i++){ 
//        total +=more[i]; 
//       } 
//     } 
//     console.log("Total: "+total); 
//     return total; 
//   } 
//   sum(5,5,5); 
//   sum(6,6,6,6," hi");
// write a function, multiplyEvens , that can be called 
// with any number of arguments and returns the product 
// of the even arguments.
// do first using the arguments object 
// // then using …rest parameter multiplyEvens (1, 6, 3, 4, 17, 2) → 48
function multiplyEvens(){
  let multEvens = 1;
  for (let arg of arguments){
    if (arg%2 ===0){
      multEvens *=arg;
    }
  }
  return multEvens;
}
console.log(multiplyEvens(1,6,3,4,17,2));

function multiplyEvens2(){
  return arguments.reduce((a,b)=> a*b);
    }
console.log(multiplyEvens(1,6,3,4,17,2));

function multiplyEvens3(x,y,...rest){
  let multEvens = x*y;
  for (let i = 0; i < rest.length; i++){
    if (rest[i]%2 ===0){
      multEvens *=rest[i];
  // let product = arguments.reduce((a,b)=> a*b);
  // return product;
    }
  }
  return multEvens;
}
console.log(multiplyEvens(1,6,3,4,17,2));

// function multiplyEvens4(x,y,...rest){
//   //let multEvens = x*y;
//   //for (let i = 0; i < rest.length; i++){
//     // if (rest[i]%2 ===0){
//     //   multEvens *=rest[i];
//   let filterred = arguments.filter(item => item%2 ===0)
//   return filterred.reduce((a,b)=> a*b);
//     }

// console.log(multiplyEvens4(1,6,3,4,17,2));

// function sayHi() { 
//   console.log('Hello'); 
// } 
// setTimeout( sayHi , 10000);

// function sayHi (phrase, who) { 
//   console.log( phrase + ', ' + who ); 
// } 
// setTimeout ( sayHi , 5000, "Hello", "John"); // Hello, John

// function showName() {
// console.log( arguments.length );
// console.log( arguments[0] );
// console.log( arguments[1] );

//   // it's iterable
//   // for(let arg of arguments)console.log(arg);
// }

// // shows: 2, Julius, Caesar
// showName("Julius", "Caesar");

// // shows: 1, Ilya, undefined (no second argument)
// showName("Ilya");
// function f() {
//   let showArg = () => console.log(arguments[0]);
//   showArg();
// }

// // console.log(f(1)); // 1
// let arr = [3, 5, 1,100,36];

// console.log( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)
// let str = "Hello";
// console.log(str[0]);
// console.log(str[1]);

// //console.log( [...str] ); // H,e,l,l,o
// console.log(str[0]);
// console.log(str[1]);

// let str = "Hello";

// // Array.from converts an iterable into an array
// console.log(( Array.from(str) )); // H,e,l,l,o
// let arr = [1, 2, 3];

// let arrCopy = [...arr]; // spread the array into a list of parameters
//                         // then put the result into a new array

// // do the arrays have the same contents?
// console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// // are the arrays equal?
// console.log(arr === arrCopy); // false (not same reference)

// // modifying our initial array does not modify the copy:
// arr.push(4);
// console.log(arr); // 1, 2, 3, 4
// console.log(arrCopy); // 1, 2, 3

// let obj = { a: 1, b: 2, c: 3 };

// let objCopy = { ...obj }; // spread the object into a list of parameters
//                           // then return the result in a new object

// // do the objects have the same contents?
// console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
// console.log(obj === objCopy); // false (not same reference)

// // modifying our initial object does not modify the copy:
// obj.d = 4;
// console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
// console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
// function sayHi () { 
//   console.log('Hello'); 
// } 
// setTimeout ( sayHi , 1000);

// function sayHi (phrase, who) { 
//   console.log( phrase + ', ' + who ); 
// } 
// setTimeout ( sayHi , 1000, "Hello", "John"); // Hello, John

// let timerId = console.log( setTimeout (() => console.log("never happens"), 1000)); 
// console.log(timerId);
// // clearTimeout(timerId);
// // console.log(timerId);
// // timer identifier clearTimeout console.log( ( timerId timerId ); ); // same identifier (doesn't become null after canceling)
// function sayHi1(){
//   console.log("Hello");
// }
// function sayHi(){
//   return sayHi1;
// }
// setTimeout(sayHi(), 1000);

// let timerId = setTimeout(() => alert("never happens"), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);
// console.log(timerId); // same identifier (doesn't become null after canceling)

// repeat with the interval of 2 seconds
// let timerId = setInterval(() => console.log('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); 
//   console.log('stop'); 
// }, 5000);

// let timerId = setTimeout(function tick() {
//   console.log('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
// setTimeout(() => console.log("World"));
// let checkTimer = setTimeout(() =>console.log("something else"),2000);

// console.log("Hello");
// console.log(checkTimer);

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start); // remember delay from the previous call

//   if (start + 100 < Date.now()) console.log(times); // show the delays after 100ms
//   else setTimeout(run); // else re-schedule
// });

// function smash(arr){
//   for ()
// }