"use strict";
function greet(user) {
    console.log("Hello " + user.name + " who is " + user.age + " years old");
}
greet({ age: 30, name: "dave" });
function combine(firstInput, secondInput, resultType) {
    var result;
    if ((typeof firstInput === "number" && typeof secondInput === "number" || resultType === 'as-number')) {
        result = +firstInput + +secondInput;
    }
    else {
        result = firstInput.toString() + secondInput.toString();
    }
    return result;
}
var combinedAges = combine(20, 50, 'as-number');
console.log(combinedAges);
var combinedAgesStrings = combine('20', '50', 'as-number');
console.log(combinedAgesStrings);
var combinedNames = combine("Dave", "Suzy", 'as-text');
console.log(combinedNames);
