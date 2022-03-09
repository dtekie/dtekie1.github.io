"use strict";
/*eslint disable*/
let a, b, c;  a = {x:1, y:2, z:3}; 
b = {...a };
b.x = 100;
c = {u: 10, v: 20, w: 30}; 
console.log(b); // {x:1, y:2, z:3} b.x console.log(a) // {x:1, y:2, z:3} console.log(b) // {x:100, y:2, z:3}
let combined = {...b, ...c};
console.log(combined);