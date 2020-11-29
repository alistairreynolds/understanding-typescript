// This is generic
var users = [];
// These are specific
var users1 = []; // Would be like string[]|number[]
var users2 = [];
var users3 = []; // However this does not work
users1.push('asd');
users1.push(1);
users2.push('asd');
users2.push(1);
// Would be generic if not for Promise<string>
var promiseFn = new Promise(function (resolve, reject) {
    if (Math.random() > 0.5) {
        resolve('all good');
    }
    else {
        reject('all bad');
    }
});
promiseFn.then(function (r) { return console.log(r); })["catch"](function (r) { return console.error(r); });
// Defining a generic function
// Convention is to use "T", then carry on with the alphabet
function merged(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeResult = merged({ name: 'sdada' }, { age: 30 });
var mergeResult2 = merged({ potatoes: ['red', 'brown'] }, { age: 30 });
// If we just used (objA: object) on the function definition, it wouldn't be able to know "name" is a property
console.log(mergeResult.name);
console.log(mergeResult2.potatoes[0]);
