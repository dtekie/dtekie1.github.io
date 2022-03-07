"use strict";
/*eslint-disabled*/
/* write a function, maxPoints, to find and return the maximum points of any single player.  */
// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// function sumPoints(arr) {
//     let sum = 0;
//     for (let player of players) {
//         for (let i = 0; i< player.points.length; i++) {
//             sum += player.points[i];
//         }
//     }
//     return sum;
// }
// function maxPoint(){
//     let max = 0;
//     for (let player of players){
//        for (let i = 0; i<player.points.length; i++){
//             let playerMax = player.points[0];
//             console.log(playerMax);
//             // if (player.points[i])  > playerMax){
//             //     playerMax = player.points[i];
//             }
//         }
//         return playerMax;
//     }
//     //console.log(max);
// }
// console.log(maxPoints(players))

// console.log("expect 10: ", maxPoints(players));
// console.log(maxPoint(players));
// const arr1 = [[1,2,3],[5,2,3],[9,2,3]];
// const arr2 = [[1,2,10],[3,4,5],[5,6,7]];
// function addMatrices(arr1, arr2){
//     let result=[];
//     let sum = 0;
//     for (let i = 0; i < arr1.length; i++){
//         let innerArray = [];
//         for (let j = 0; j < arr1[i].length; j++){
//         sum = arr1[i][j] + arr2[i][j];
//         innerArray.push(sum);
//     }
//     result.push(innerArray);
// }
// return result;
// }
// console.log(addMatrices(arr1,arr2));





// function findProps(arr) {

//     let newArr = [];

//     for (const elem in arr) {

//         newArr.push(elem);

//     }

//     return newArr;

// }
// function maxPoints(){
//     for (let i = 0; i < players.length; i++){
//         let max = 0;
//         for (let j = 0; j < players.points[1].length; j++){
//             let max = Math.max(players.points[i][j]);
//         }
//         console.log(max);
//     }
//     }
// maxPoints(players);

//console.log("expect 4:",  maxPoints(players));

 
// let arr = [1,2,3,6,10,2];
// let arr1 =arr.reduce((a,b)=> a>b?a:b);
// console.log(arr1);

// const courses = [{id: 1, name: "Node.js"},



// {id: 2, name: "javascript"}
// ];



// courses.sort((a,b)=>a.name.toLowerCase()-b.name.toLowerCase());

// console.log(courses);
// we have an array with the name and surname

let arr = ["John", "Smith"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);  // Smith





