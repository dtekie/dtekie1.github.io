"use strict";
/*eslint-disable*/
// // /* write a function, maxPoints, to find and return the maximum points of any single player.  */
// // const player1 = {name: "Bob", points: [1, 2, 1]};
// // const player2 = {name: "Andre", points: [2, 0, 1]};
// // const player3 = {name: "Max", points: [1, 1, 1]};
// // const players = [player1, player2, player3];
// // // let mapPointsPlayer = players.map(item => item.points);
// // // console.log(mapPointsPlayer);
// // // let maxPointsPleyers = mapPointsPlayer.reduce((a,b) => a>b?a:b);
// // // console.log(maxPointsPleyers);

// // function sumPoints(arr) {
// //     let sum = 0;
// //     for (let player of players) {
// //         for (let i = 0; i< player.points.length; i++) {
// //             sum += player.points[i];
// //         }
// //     }
// //     return sum;
// // }
// // console.log(sumPoints(players));
// // function maxPoint(){
// //     let playerMaxScore = [];
// //     for (let player of players){
// //         let playerMax = player.points[0];
// //        for (let i = 0; i<player.points.length; i++){
// //             //playerMax = player.points[0];
// //             player.points[i] > playerMax ? player.points[i]: playerMax;
// //             }
// //             playerMaxScore.push(playerMax);
// //         }
// //         return playerMaxScore;
// //     }
// // console.log(maxPoint(players));

// // console.log("expect 10: ", maxPoints(players));
// // console.log(maxPoint(players));
// // const arr1 = [[1,2,3],[5,2,3],[9,2,3]];
// // const arr2 = [[1,2,10],[3,4,5],[5,6,7]];
// // function addMatrices(arr1, arr2){
// //     let result=[];
// //     let sum = 0;
// //     for (let i = 0; i < arr1.length; i++){
// //         let innerArray = [];
// //         for (let j = 0; j < arr1[i].length; j++){
// //         sum = arr1[i][j] + arr2[i][j];
// //         innerArray.push(sum);
// //     }
// //     result.push(innerArray);
// // }
// // return result;
// // }
// // console.log(addMatrices(arr1,arr2));





// // function findProps(arr) {

// //     let newArr = [];

// //     for (const elem in arr) {

// //         newArr.push(elem);

// //     }

// //     return newArr;

// // }
// // function maxPoints(){
// //     for (let i = 0; i < players.length; i++){
// //         let max = 0;
// //         for (let j = 0; j < players.points[1].length; j++){
// //             let max = Math.max(players.points[i][j]);
// //         }
// //         console.log(max);
// //     }
// //     }
// // maxPoints(players);

// //console.log("expect 4:",  maxPoints(players));

 
// // let arr = [1,2,3,6,10,2];
// // let arr1 =arr.reduce((a,b)=> a>b?a:b);
// // console.log(arr1);

// // const courses = [{id: 1, name: "Node.js"},



// // {id: 2, name: "javascript"}
// // ];



// // courses.sort((a,b)=>a.name.toLowerCase()-b.name.toLowerCase());

// // console.log(courses);
// // we have an array with the name and surname

// // const peopleArray = [
// //     { name: "Sam", age: 15 },
// //     { name: "William", age: 6 },
// //     { name: "Lucy", age: 13 },
// //     { name: "Barney", age: 80 },
// //   ];

// // function doubleAges(arr) {
// //     return arr.map((item) => ({ name: item.name, age: item.age * 2 }));
// //   }
// //   console.log(doubleAges(peopleArray));

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   // loop over keys-and-values
//   for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}:${value}`); // name:John, then age:30
//   }

//   user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// // Map iterates as [key, value] pairs, very convenient for destructuring
// for (let item of user) {
//   console.log(item); // name:John, then age:30
// }
// let guest = "Jane";
// let admin = "Pete";

// // Let's swap the values: make guest=Pete, admin=Jane
// [guest, admin] = [admin, guest];

// console.log(`${guest} , ${admin}`); // Pete Jane (successfully swapped!)

// let array = ["Banana", undefined, "orange", "manago", "peach"]
// let  [item1 = "lemon", item2 = 'Mandarine', ...rest] = array;
// console.log(item1);
// console.log(item2);
// console.log(rest);

// user = {
//     name: "John",
//     years: 30
//   };
// let {name: firstName,years: age,isAdmin = false} = user;
// console.log(firstName);
// console.log(age);
// console.log(isAdmin);
      
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function topSalary(salaries) {

//     let maxSalary = 0;
//     let maxName = null;
  
//     for(const [name, salary] of Object.entries(salaries)) {
//       if (maxSalary < salary) {
//         maxSalary = salary;
//         maxName = name;
//       }
//     }
//   return maxName;
//   } 
//   console.log(topSalary(salaries));

//   function sayHi {
//     console.log("Hi"); 
//   }
//   console.log(sayHi.name); 
const bank = {    transactionsDB: [],};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];

bank.getBalance = function (id) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    let balance = 0;
    for (const trans of customer.customerTransactions) {    
        balance += trans;   
    }
        return balance;  
};
const ids = [1,2,3];
let total = 0;
for (let id of ids){
    total += bank.getBalance(id)
}
// console.log(total);
/*1. Write your own version of map.  Write a function, 
myMap that takes 2 arguments, an array and a function 
to apply to the array.  
It should return a new array of the same size with the 
function applied to each element of the input array.  
It should not change the input array. 
// */
// function myMap(arr,myFunc){
//     let myArr = [];
//     for (let i = 0; i < arr.length; i++){
//     myArr.push(myFunc(arr[i]));
//     }
//     return myArr;
// }

// function myFunc(num){
// return num * 2;
// }
// let arr = [1,2,3];
// console.log(myMap(arr,myFunc));

function averageOfEvenNumbers(arr) {
    const evenArray = arr.filter((item) => item % 2 === 0);
    const sumEvenArray = evenArray.reduce((a, b) => a + b,0);
    const average = (sumEvenArray/evenArray.length).toFixed(2);
    return average;
  };
  const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
  

  const avg = averageOfEvenNumbers(numArray);
  console.log(avg);


        