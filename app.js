"use strict";
function combine(input1, input2, resultType // defines a literal
) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number" || resultType === 'as-number')) {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(20, 50, 'as-number');
console.log(combinedAges);
var combinedAgesStrings = combine('20', '50', 'as-number');
console.log(combinedAgesStrings);
var combinedNames = combine("Dave", "Suzy", 'as-text');
console.log(combinedNames);
