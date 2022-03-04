"use strict";
/*eslint-disable*/

// const arr = ["I", "go", "home"];

// delete arr[1]; // remove "go"

// console.log( arr[1] ); // undefined

// // now arr = ["I",  , "home"];
// console.log( arr.length ); // 3

// let arr = ["I", "study", "JavaScript"];

// let deleted = arr.splice(1, 1); // from index 1 remove 1 element

// console.log( arr ); // ["I", "JavaScript"]
// console.log( deleted ); // ["I", "JavaScript"]

// let arr = ["I", "study", "JavaScript", "right", "now"];

// // remove 3 first elements and replace them with another
// let sliced = arr.splice(0, 3, "Let's", "dance");

// console.log( arr ) // now ["Let's", "dance", "right", "now"]
// console.log( sliced ) // now ["Let's", "dance", "right", "now"]

// let arr = ["I", "study", "JavaScript"];

// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");

// console.log( arr ); // "I", "study", "complex", "language", "JavaScript"

// let arr = [1, 2, 5];

// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(-1, 0, 3, 4);

// console.log( arr ); // 1,2,3,4,5

// let arr = ["t", "e", "s", "t"];
// console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
// console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

// let arr = [1, 2];

// // create an array from: arr and [3,4]
// console.log( arr.concat([3, 4]) ); // 1,2,3,4

// // create an array from: arr and [3,4] and [5,6]
// console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // create an array from: arr and [3,4], then add values 5 and 6
// console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// console.log( arr.concat(arrayLike[0],arrayLike["length"]) ); // 1,2,[object Object]

// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// console.log( arr.concat(arrayLike) ); // 1,2,something,else

// for each element call alert
// function showNames(names){
//     for (let name of names){
//         console.log(name);
//     }
// }

// let names = ["Bilbo", "Gandalf", "Nazgul"];
// //showNames(names)
// names.forEach(showNames);

// function showNames(names){
//     for (let name of names){
//         console.log(name);
//     }
// }

// let names = ["Bilbo", "Gandalf", "Nazgul"];
// //showNames(names)
// names.forEach(function(names){
//         console.log(names);
// });

// let numbers = [1,2,3,4,5,6];
//showNames(names)
// numbers.forEach(function(numbers){
//         console.log(numbers);
// });

// for each element call alert
// let names = ["Bilbo", "Gandalf", "Nazgul"]
// names.forEach(function (names){
//     console.log(names)
// });

// numbers.forEach(function(number){
//     if ( number%2 !==0)
//     console.log(number);
// })
// let names = ["Bilbo", "Gandalf", "Nazgul"];
// names.forEach((item, index) => {
//     console.log(`${item} is at index ${index}`);
//   });

// let arr = [1, 0, false];

// console.log( arr.indexOf(0) ); // 1
// console.log( arr.indexOf(false) ); // 2
// console.log( arr.indexOf(null) ); // -1

// console.log( arr.includes(1) ); // true

// const arr = [NaN];
// console.log( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
// console.log( arr.includes(NaN) );// true (correct)

//let result = arr.find(function(item, index, array) {
// if true is returned, item is returned and iteration is stopped
// for falsy scenario returns undefined
//});

//let user = users.find(item => item.id == 1);
//   let user = users.find(function (item) {
//     if (item.id ===1){
//         console.log(item.name)
//     }
//   });
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];

//   let user = users.findIndex(item => item.id == 2);

//   console.log(user); // John

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// returns array of the first two users
//   let someUsers = users.filter(item => item.id < 3);

//   console.log(someUsers.length); // 2
//   let someUsers1 = users.filter(item => {
//       if (item.id > 2){
//           console.log(item.name)
//       }
//   })
// //   console.log(someUsers1);
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths); // 5,7,6

// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];
// //8.   [5] Use the map function to map the people array to the following:
// [{ fullName: "John Smith", id: 1 },   { fullName: "Pete Hunt", id: 2 },]
// let fullName = people.map(item => item.fullName);
// let id = people.map(item => item.id)
// console.log(fullName);
// console.log(id);
// let hike = '1043huthuthut';
// let what = parseInt(hike, 10);
// console.log(what);
// console.log(+"5678" === Number("5678"));

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// function sumPoints(arr) {
//     let sum = 0;
//     for (const player of players) {
//         for (let i = 0; i< player.points.length; i++) {
//             sum += player.points[i];
//         }
//     }
//     return sum;
// }
// console.log("expect 10: ", sumPoints(players));

// function findProps(arr) {
//     let newArr = [];
//     for (const elem in arr) {
//         newArr.push(elem);
//     }
//     return newArr;
// }

// // console.log("expect [a, b, c]: ",
// // findProps({a: 1, b: 2, c: 3}));

// /* write a function, sumPoints, to get the total points across all players */

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// // console.log("expect 10: ", sumPoints(players));

// function sumPoints(){

// let outerSumPoints = 0;

// for (let player of players) {
//     let innerSumPoints = 0;
// for (let key in player){
//     for (let point of key[1]){
//     innerSumPoints+=point;
// }
// }
// outerSumPoints += innerSumPoints;
// }
// return outerSumPoints;
// }
// console.log(sumPoints(players));

// let arr = ["Bilbo",  "Gandalf",  "Nazgul"];
// let  length  = arr.map ((item,  index) => `${index}: + ${item.length}`);
// let  length1  = arr.map ((item,  index) => `${index}: ${item.length}`);
// console.log(length);
// console.log(length1);

// function compareNumericDesc(a,b){
//     // a = String(a);
//     // b = String(b);
//     // -1 means a comes before b
//     if (a>b) return -1;
//     if (a===b) return 0;
//     if (a<b) return 1;
// }
// let arr = [1,15,2];
// let product = arr.reduce(function (a,b) {return a*b;});
// let max = arr.reduce((a,b) => a > b ? a : b);

// console.log(product);
// console.log(max);

// let countries = ['Österreich', 'Andorra', 'Vietnam'];

// alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

// alert( countries.sort( (a, b) => a.localeCompare(b) ) );
/*Write a function filterRangeInPlace(arr, a, b) that gets 
an array arr and removes from it all values except those 
that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. 
It should not return anything.
For instance:
*/
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// console.log( arr ); // [3, 1]
// function filterRangeInPlace(arr, num1, num2){

// }

// sort the following objects of the array in ascending order.
// the sort metjod sorts for array or numbers and strings 
// but not for array of objects.
// if you try to sort this like

// const courses = [{id: 1, name: "Node.js"}, 
//     {id: 2, name: "javascript"}
// ];
// const sortedCourses = courses.sort();// this does not sort them
// console.log(sortedCourses);// the same output

//if we create a compare function and use it an an arg to our
// sort fn, this does not solve our problem either
// function compare(a,b){
//     if (a < b) { return -1};
//     if (a > b) { return 1};
//     return 0;
// }
// const sorted = courses.sort(compare);
// console.log(sorted);
// // the solution should be like this

// function anotherCompare(a,b){
//     a = a.name.toLowerCase();
//     b = b.name.toLowerCase();
//     if (a < b) { return -1};
//     if (a > b) { return 1};
//     return 0;
// }
// const anotherSorted = courses.sort(anotherCompare);
// console.log(anotherSorted);

/*
Chapter: Data Types  Section:  Array methods Do all the Tasks (13) in this section. - do not worry about the uniform distribution for “Shuffle an array” task Implement the tasks in VSCode and run them with the arrayMethodsTests.js file.  Add your own Mocha tests for the following tasks:   • Copy and sort array,  • Sort users by age,  • Shuffle an array,  • Get average age 
*/




// sort()
// let arr = ["javascript", "visual basic", "C-sharp"];
// function compare(a, b) {
//     a = a.toLowerCase();
//     b = b.toLowerCase();
    
//   if (a < b) return 1;
//   if (a === b) return 0;
//   if (a > b) return -1;
// }
// console.log(arr.sort(compare(arr)));

/*
Chapter: Data Types  Section:  
Array methods Do all the Tasks (13) in this section. 
- do not worry about the uniform distribution for 
“Shuffle an array” task Implement the tasks in VSCode 
and run them with the arrayMethodsTests.js file.  
Add your own Mocha tests for the following tasks:   
• Copy and sort array,  
• Sort users by age,  
• Shuffle an array,  
• Get average age 
*/

// Write the function camelize(str) that changes 
//dash-separated words like “my-short-string” into 
//camel-cased “myShortString”.
// That is: removes all dashes, 
// each word after dash becomes uppercased.
// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, 
// transform it and join back.
/* write a function findProps to return an array of all the properties in any given object */


function findProps(obj){

  let propArr = [];
  for ( let key of Object.keys(obj)){
    propArr.push(key);
}
return propArr;
}
console.log(findProps({a: 1, b: 2, c: 3}));


let myObj = {
  myArray: [1, 2, 3],
  anotherArray: [1, 2, 3],
  equals: function() {
  return this.myArray === this.anotherArray;
  }
  }
  console.log(myObj.equals());

const courses = [
{id: 1, name: "Node.js"},
{id: 2, name: "javascript"}
];
courses.sort((a,b)=>b.name.toLowerCase()-a.name.toLowerCase());
console.log(courses);









            	
