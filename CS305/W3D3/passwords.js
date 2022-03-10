"use strict";
/*eslint-disable*/

function askPassword(ok, fail, password) {
  if (password === "rockstar") {
      return ok();
  } else {
      return fail();
  }
}

let user = {
    name: 'John',

    loginOk() {
      return  this.name + ' logged in' ;
    },

    loginFail() {
      return this.name + ' failed to log in' ;
    }

};

let loginUser1 = askPassword(user.loginOk.bind(user), user.loginFail.bind(user), 'rockstar');
console.log(loginUser1);

function askPassword2(ok, fail, password) {
    if (password === "rockstar") {
        return ok();
    } else {
        return fail();
    }
}

let user2 = {
    name : 'Daniel',
    
    loginOk() {
        return  this.name + ' logged in' ;
    },
    
    loginFail() {
        return this.name + ' failed to log in' ;
    }
    
};

let loginUser2 = askPassword2(user2.loginOk.bind(user2), user2.loginFail.bind(user2), 'rockstar');
//let loginUser3 = askPassword2(user2.loginOk.apply(user2), user2.loginFail.apply(user2), ['rockstar1']);
console.log(loginUser2);
//console.log(loginUser3);

askPassword(() => user.loginOk(true), () => user.loginFail(false));

  user = {
      name: 'Dave',
  
      loginOk() {
        return  this.name + ' logged in' ;
      },
  
      loginFail() {
        return this.name + ' failed to log in' ;
      }
  };
  
let partial = askPassword(user.loginOk.bind(user, true), user.loginFail.bind(user, false),'rockstar');
console.log(partial);

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests