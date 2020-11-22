function combine(
    input1: number | string,
    input2: number | string,
    resultType: 'as-number' | 'as-text' // defines a literal
) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number" || resultType === 'as-number')) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(20, 50, 'as-number');
console.log(combinedAges);

const combinedAgesStrings = combine('20', '50', 'as-number');
console.log(combinedAgesStrings);

const combinedNames = combine("Dave", "Suzy", 'as-text');
console.log(combinedNames);