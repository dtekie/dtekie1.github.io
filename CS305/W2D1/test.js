"use strict";

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: function sayHi() {
        return (
        `Hello my  ${this.name} is John, i am ${this.age}
        my job is ${this.job}`
        );
     }

  };
//   const Intern= {
//     name: "Ben",
//     age: 21,
//     job: "Software Engineer Intern"
//   };
  
  /**
   * @returns {undefined} 
   */
  
  console.log(Manager.sayHi());
  // add sayHi function to both objects
  //Manager.sayHi = sayHi;
  //Intern.sayHi = sayHi;
  
  //Manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  //Intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'
  