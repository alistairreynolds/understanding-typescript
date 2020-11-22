"use strict";
function add(num1, num2, showResult, prefix) {
    var result = prefix + " " + (num1 + num2);
    if (showResult) {
        alert(result);
    }
    else {
        return result;
    }
}
var first = +"5";
var second = 7.2;
var showResult = true;
var r = add(first, second, showResult, "The result is ");
console.log(r);
