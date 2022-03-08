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

// console.log(title);  // Menu alert(w);      // 100 alert(h);      // 200
// console.log(w);  // Menu alert(w);      // 100 alert(h);      // 200
// console.log(h);  // Menu alert(w);      // 100 alert(h);  // 200
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