"use strict";
/*eslint-disable*/
/*
1. write a function, averagePoints, to get an array containing 
the average points across for each player .  
Try with a regular for..of loop and then using map.
*/
// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];
// function averagePoints(arr){
//     let averages = [];
// for (let player of players){
//     let sum = 0;
//     let averagePoints = 0;
//     for (let point of player.points){
//         sum += point;
//         averagePoints = sum/player.points.length;
//     }

//     averages.push(averagePoints);
// }
// return averages;
// }
// console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
// console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints1 (players));
// function averagePoints1(players){
//     return players.map((item => calcAverage(item.points)));
// }
// function calcAverage(arr){
//     const sum = arr.reduce((a,b) => a+b);
//         return sum/arr.length;
// }

// 5. /* write functions executor, add, and mult as defined
//by the test below */
// describe("executor", function(){
//  it ("tests add", function(){
//  assert.strictEqual(executor(add, 5, 10), 15);
//  });
//  it("tests mult", function(){
//  assert.strictEqual(executor(mult, 5, 10), 50);
//  });
// });
// function executor(fun, x, y){
//     return  function(){
//         return x+y;
//     };
// }
// function add(num1,num2){
//     return num1 + num2;
// }
// function mult(num1, num2){
//     return num1 * num2;
// }
// console.log(executor(add,2,3));
//const assert = require("assert");

// function executor(foo, x, y) {
//     return foo(x,y);
// }
// function add(x,y) {
//     return x+y;
// }
// function mult(x,y) {
//     return x*y;
// }
// console.log(executor(add, 2, 3))
/*
1. [10] Create a unitConversion object using an 
object literal. It should have isDegrees boolean property 
and a method to convert from degrees to radians or vice
versa if isDegrees is true/false respectively.
Create a unitConversion object using constructor function, UnitConversion. It
should have isDegrees property and method for conversion(same as above).
Degrees=Radians×180/π
unitConversion.isDegrees = false;
unitConversion(10) → 1800/ π //converts radians to degrees
unitConversion.isDegrees = true;
unitConversion(10) = 10 * pi /180; //converts degrees to radians
*/
// const unitConversion = {
//     isDegrees: false,
//     convert: function(number){
//         if (this.isDegrees){
//             let radians = number * Math.PI/180;
//             return radians;
//         }
//         else{
//             let degrees = number * 180/Math.PI;
//             return degrees;
//         }
//     },
// }
// unitConversion.isDegrees = true;
// console.log(unitConversion);
// console.log(unitConversion.convert(10));

// function UnitConvertion(mycheck, value) {
//     this.isDegree = mycheck;
//     this.convert = function () {
//         if (this.isDegree = true) {
//             return value*Math.PI/180;
//         }
//         else {
//             return value*180/Math.PI;
//         }
//     }
// }
// const myDegree = new UnitConvertion(true,180);
// console.log(myDegree.convert());
// const myRadian = new UnitConvertion(false,22/7);
// console.log(myRadian.convert());
/*
2. [2] Rewrite the following function as an arrow function
function printMe(){
console.log(“hello”);
}
*/
// let printMe = () => console.log("hello");
// console.log(printMe());

// function Item(id, name, price, discount = 0.1, freeShipping = false) {
//   this.id = id;
//   this.name = name;
//   this.price = price;
//   this.discount = discount;
//   this.freeShipping = freeShipping;
//   this.getFinalPrice = function () {
//     this.price * (1 - discount) + shippingCharge;
//   };
// }
// const shippingCharge = 3;
// const item1 = new Item(1, "cell phone", 500, 10);
// const item2 = new Item(2, "book", 50, 0, true);
// const item3 = new Item(3, "table", 500, 1);
// const item4 = new Item(4, "adapter", 40, 2, true);

// let shoppingCart = [item1, item2, item3, item4];

// function getChechOutPrice(shoppingCart){
//     //let sum = 0;
//     for (let item of shoppingCart){
//         let sum = 0;
//         for (let i =0; i < item.price.length; i++){
//             sum+=price;
//             console.log(sum);
//         }
//         return sum;
//     }
//     }
// console.log(item1);
// console.log(getChechOutPrice(shoppingCart));

// function Item(id, name, price, discount, freeShipping) {
//   this.id = id;
//   this.name = name;
//   this.price = price;
//   this.discount = discount;
//   this.freeShipping = freeShipping;

//   this.getFinalPrice = function () {
//     //let finalPrice = (this.price > 500 ) ? 500-(this.discount/100*500) : this.price;
//     let finalPrice = this.price * (1 - this.discount / 100);
//     return this.freeShipping == true ? finalPrice + 3 : finalPrice;
//   };
// }
// const item1 = new Item(1, "cell phone", 500, 10);
// const item2 = new Item(2, "book", 50, 0, true);
// const item3 = new Item(3, "table", 500, 1);
// const item4 = new Item(4, "adapter", 40, 2, true);
// let shoppingCart = [item1, item2, item3, item4];

// function getCheckoutPrice(arr) {
//   let checkoutPrice = 0;
//   for (const checkItem of arr) {
//     checkoutPrice += checkItem.getFinalPrice();
//   }
//   return checkoutPrice;
// }

// function getItemsPricedOver100(arr) {
//   arr.forEach((element) => (element.price > 100 ? console.log(element) : ""));
// }
// function findCheapestItem(arr){
// let minPrice = shoppingCart.map(item => (item.price)
//         .reduce((a,b) => a<b?a:b)

// }
// function findCheapestItem(arr) {
//     let min = 1000;
//     let result = {};
//     for (const checkItem of arr) {
//         if (checkItem.price < min ) {
//             result =  {name: checkItem.name, price: checkItem.price};
//             min = checkItem.price;
//         }
//     }

//     return result;

// }

// //console.log(getItemsPricedOver100(shoppingCart));
// //console.log(getCheckoutPrice(shoppingCart));
// console.log(findCheapestItem(shoppingCart));

/*

*/
// function Calculator() {
//   this.setValues = function (numa, numb) {
//     this.a = numa;
//     this.b = numb;
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// calculator.setValues(5, 10);
// console.log(calculator.sum());
// console.log(calculator.mul());

// calculator = {
//   setValues(numa, numb) {
//     this.a = numa;
//     this.b = numb;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.setValues(5, 10);

// console.log(calculator.mul());

// console.log(calculator.sum());

// use filter, find, and findIndex to find ➢
// all the even numbers ➢  the first even number ➢
// the index of the first even number

//
// function compare(a,b){
//     if ( a<b) return 1;
//     if (a>b) return -1;
//     return 0;
// }

// const sorted = [4, 2, 8, 15].sort(compare);
// console.log(sorted);
//9. use split, join, and sort to take the words
//in a string and reorder them by shortest to longest
// function compare(a,b){
//     if ( a<b) return 1;
//     if (a>b) return -1;
//     return 0;
// }

// 5,7,6 //modify so that it logs array with index:
//item.length instead of just item.length
//console.log("expect 0: 5, 1: 7, 2: 6", lengths);

// let lengths = ["Bilbo", "Gandalf", "Nazgul"]
// .map(item => item.length);
// let index = ["Bilbo", "Gandalf", "Nazgul"]
// .map((item,index)=>index);
// console.log(lengths, index);
//12.  Find the oldest man

//11. Get average age,
// round the result to keep only two decimals.
// let array= [{name:"ram",age:29},
// {name:"syam",age:40},
// {name:"ganga",age:19}];
//console.log(“expect 75.33”,getAverageAge(array));
//console.log(“expect {name:"syam",age:40}”,
//findOldestMan(array));
// for (let person of array){
//     console.log(person)
//     for (let key in Object.keys(person)){
//         console.log(object(key));
//     }
// }

// //#9
// let str = "This is Javascrip course";
// let strArr = str.split(" ");
// const itemLength = strArr.map((item,index) => {
//     return `{${item}:${item.length}}`})
// //.sort(compare);
// console.log(itemLength);
// //#10
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item,index) => {return `${index} : ${item.length}`});
// console.log('expect 0:5,1:7,2:6 : ', lengths.join());

/*
. Get average age, round the result to keep only two 
decimals.
*/
// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }
//   let john = { name: "John", age: 25 };
//   let pete = { name: "Pete", age: 30 };
//   let mary = { name: "Mary", age: 29 };
//   let arr = [ john, pete, mary ];
//   console.log( getAverageAge(arr) ); // 28

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   function sumSalaries(obj){
//   let sum = 0;
//   for (let salary in salaries){
//       sum += salaries[salary];
//   }
//   return sum;
// }
// console.log(sumSalaries(salaries));

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }
//   console.log(multiplyNumeric(menu));
//   console.log(menu);

// sort the following objects of the array in ascending order.
// the sort metjod sorts for array or numbers and strings
// but not for array of objects.
// if you try to sort this like

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript" },
];

const sortedCourses = courses.sort(); // this does not sort them
console.log(sortedCourses); // the same output

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

const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };

const players = [player1, player2, player3];

function averagePoints(arr) {
  let averages = [];
  for (let player of players) {
    let sum = 0;
    let averagePoints = 0;
    for (let point of player.points) {
      sum += point;
      averagePoints = sum / player.points.length;
    }
    averages.push(averagePoints);
  }
  return averages;
}

console.log("expect [1.33, 1, 1 ]: ", averagePoints(players));
//console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints1(players));
