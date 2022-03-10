"use strict";
/*eslint disable*/
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

const player1 = {jersey:8, stats: [{game:1, points:6},{game:2, points:7}]};
const player2 = {jersey:12, stats: [{game:12, points:16},{game:2, points:14}]};
const player3 = {jersey:6, stats: [{game:6, points:10},{game:2, points:6},{game:3, points:16},
    {game:4, points:1},{game:5, points:50}]};
const teamStats = [player1,player2,player3];
//a) use a filter method to get an array containing all player objects
// with jersey numbers greater than 10
// const greaterThanTen = teamStats.filter(item => item.jersey > 10);
// const greaterThanTen1 = teamStats.filter(item => 
//   { if (item.jersey > 10) return true;});
// console.log(greaterThanTen);
//console.log(greaterThanTen1);
// const player3points = player3.stats.map(item =>item.points);
// const maxPoints = player3points.reduce((a,b) => a+b);
// console.log(player3points);
// console.log(maxPoints);
const totalPlayer3points = player3.stats.reduce((a, b)=> a + b.points,0);
console.log(totalPlayer3points);
// function findHighestScores(statsArr){
//     let highScores = [];
//     for (let player of statsArr){
//         const stats = player.stats;
//         const mapPoints = stats.map(item => item.points);
//         //const highScores = mapPoints.reduce((max,current) => Math.max(max,current.points));
//         const highScores = mapPoints.reduce((a,b) => Math.max(a,b));
//         console.log(highScores);
//         highScores.push({jersey:player, high:highScores})
//     }
//     return highScores;
// }
// console.log(findHighestScores(teamStats));