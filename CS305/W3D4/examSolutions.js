"use strict";
/*eslint-disable */
const student = {id: 1234, firstName: "Thomas"}
const {firstName, id:studentId} = student; 
console.log('expect Thomas: ',firstName);
console.log('expect 1234: ',studentId);

const numArray = [1,2,3,4,5];
const total = numArray.reduce((previous, current) => (previous + current));
const sum = numArray.reduce(function (a,b){
    return a + b;
},0);
console.log(total);
console.log(sum);
const mapped = numArray.map(item => item * 2);
console.log(mapped);
const mapped2 = numArray.map(function(item) {
    return item * 2;})

console.log(mapped2);

const filterred = numArray.filter((item) => item%2 ===0);
const filterred2 = numArray.filter(function(item){return item%2 ===0;});
console.log(filterred);
console.log(filterred2);

const anArr = ["bob","sam","anil"];
const findName = anArr.find((name)=>(name === "sam"));
console.log(findName);

