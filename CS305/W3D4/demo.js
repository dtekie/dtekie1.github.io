"use strict";
/*eslint-disable*/
// // function makeCounter() {
// //     let count = 0;
  
// //     return function() {
// //       return count++;
// //     };
// //   }
  
// //   let counter = makeCounter();


// // console.log( counter() ); // 0
// // console.log( counter() ); // 1
// // console.log( counter() ); // 2
  
// // function makeCounter() {
// //     let count = 0;
  
// //     return function() {
// //       return count++;
// //     };
// //   }
  
// //   let counter = makeCounter();
// //   let counter2 = makeCounter();
  
// //   console.log( counter() ); // 0
// //   console.log( counter() ); // 1
  
// //   console.log( counter2() ); // ?
// //   console.log( counter2() ); // ?

// // let x = 1;

// // function func() {
// //     console.log(x); // ?
// //     //let x = 2;

// // }

// // // func();
// // let group = { 
// //     title: "Our Group", 
// //     students: ["John", "Pete", "Alice"], 
// //     showList () { 
// //         this.students.forEach(student) {
// //             console.log(this.title + ":" + student
// //         }.bind(group))
     
// //     }); 
// //     } 
// // };

// function makeCounter(){
//     let count = 0;
//     const innerFunc = function counter(){
//         count++;
//         return count;
//     };
//     return innerFunc;
// }
// //console.log(makeCounter()());
// // const counter1 = makeCounter();
// // const counter2 = makeCounter();
// // counter1();
// // counter1();
// // counter1();
// // console.log(counter1())
// // console.log(counter2())
// function Counter() {
//     let count = 0;
  
//     this.up = function() {
//       return ++count;
//     };
//     this.down = function() {
//       return --count;
//     };
//   }
  
//   let counter = new Counter();
  
// //   console.log( counter.up() ); // ?
// //   console.log( counter.up() ); // ?
// //   console.log( counter.down() ); // ?
function makeArmy() {

  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = function() { // shooter function
      console.log( i ); // should show its number
    };
    shooters.push(shooter);
  }
  return shooters;
}
let army = makeArmy();
console.log(army[2]());
