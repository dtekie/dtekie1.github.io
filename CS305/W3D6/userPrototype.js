"use strict";
/*eslint-disable*/

function User(firstname,lastname,birthDate){ 
   
    this.firstname=firstname; 
    this.lastname=lastname; 
    this.birthDate=birthDate; 

User.prototype.getFullName = getFullName;
User.prototype.getAge = getAge;
}


function getFullName(){
    return this.firstname+ " " +this.lastname;
} 
function getAge(){
    return new Date().getFullYear()-this.birthDate.getFullYear();
}
let user2=new User('Edward','Hopkins',new Date('1991-11-14')); 
let user1=new User('John','Smith',new Date('2000-10-01')); 

console.log(user1.getAge());
console.log(user1.getFullName());
