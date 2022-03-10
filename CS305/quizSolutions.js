"use strict";
/*eslint-disable*/

let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];

//Use the map function to map the people array to the following:
//[{ fullName: "John Smith", id: 1 },
//{ fullName: "Pete Hunt", id: 2 },]
//let mappedFullNames = people.map(item => ({`fullName: ${item.name}, id: ${item.id}`});

//console.log(mappedFullNames);

let usersMapped = people.map(user => ({
fullName: `${user.name} ${user.surname}`,
age: user.age
}));
console.log(usersMapped);
//OR

const mapped = people.map(function(person) {
const newObj = {
fullName: person.name + " " + person.surname,
age: person.age
};
return newObj;
});
console.log(mapped);