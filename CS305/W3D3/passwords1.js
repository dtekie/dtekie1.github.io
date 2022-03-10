"use strict";
/*eslint-disable*/
/* global assert askPassword, askPassword2, user, user2 */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */

function askPassword(ok, fail, password) {
  if (password == "rockstar") {
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
const loginSuccess = user.loginOk.bind(user);
const loginFailure = user.loginFail.bind(user);

console.log(askPassword(loginSuccess, loginFailure, 'rockstar'));
console.log(askPassword(WrapperOkApply, WrapperFailApply, 'rockstar'));
console.log(askPassword(WrapperOkCall, WrapperFailCall, 'rockstar'));

function WrapperOkApply() {
    return user.loginOk.apply(user)
}
function WrapperFailApply(){
return user.loginFail.apply(user)
}

function WrapperOkCall() {
    return user.loginOk.call(user)
}
function WrapperFailCall(){
return user.loginFail.call(user)
}


function askPassword2(ok, fail, password) {
    if (password == "rockstar") {
        return ok();
    } else {
        return fail();
    }
  }
  let user2 = {
      name: 'Daniel',
      loginOk() {
        return  this.name + ' logged in' ;
      },
      loginFail() {
        return this.name + ' failed to log in' ;
      }
  };
  const loginSuccess2 = user2.loginOk.bind(user2);
  const loginFailure2 = user2.loginFail.bind(user2);
  
  console.log(askPassword2(loginSuccess2, loginFailure2, 'rockstar'));
  console.log(askPassword2(WrapperOkApply2, WrapperFailApply2, 'rockstar'));
  console.log(askPassword(WrapperOkCall2, WrapperFailCall2, 'rockstar'));
  
  
  function WrapperOkApply2() {
      return user2.loginOk.apply(user2)
  }
  function WrapperFailApply2(){
  return user2.loginFail.apply(user2)
  }
  
  function WrapperOkCall2() {
      return user2.loginOk.call(user2)
  }
  function WrapperFailCall2(){
  return user2.loginFail.call(user2)
  }

  //module.exports = { askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests

