// Defining as a type
// type AddFn = (a: number, b: number) => number;
var addT;
addT = function (a, b) {
    return a + b;
};
var Person = /** @class */ (function () {
    function Person(age, name) {
        this.age = age;
        this.name = name;
    }
    Person.prototype.greet = function (greeting) {
        console.log(greeting + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person(30, 'asdda');
console.log(user1);
