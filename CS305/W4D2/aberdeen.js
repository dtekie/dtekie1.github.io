"use strict";
/*eslint-disable*/

function scotland(){
    let aberdeen = {
        origin: true,
        expression: function(){
            console.log(this);
        }
    }
    let innerFun =aberdeen.expression();
    innerFun();
    aberdeen.expression();
}
let innerFun = aberdeen.expression.bind(aberdeen);
let innerFun = function(){
    aberdeen.expression.call(aberdeen);
}
scotland();

