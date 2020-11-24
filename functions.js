"use strict";
function add(first, second) {
    return first + second;
}
function addAndHandle(a, b, cb) {
    const r = a + b;
    cb(r);
}
function print(num) {
    console.log(num);
}
// Set the combinedValues var to be a method that requires two number parameters and returns a number
let combinedValues;
combinedValues = add;
print(add(3, 5));
print(combinedValues(7, 10));
addAndHandle(3, 5, (asd) => {
    console.log(`Handled results: ${asd}`);
});
