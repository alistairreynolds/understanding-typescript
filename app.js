// Defining as a type
// type AddFn = (a: number, b: number) => number;
var addT;
addT = function (a, b) {
    return a + b;
};
var Person = /** @class */ (function () {
    function Person(age, name, surname) {
        this.age = age;
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.greet = function (greeting) {
        console.log(greeting + " " + this.name);
    };
    Person.prototype.farewell = function (greeting) {
        console.log(greeting + " " + this.name);
    };
    return Person;
}());
var Dog = /** @class */ (function () {
    function Dog(name, sn) {
        this.name = name;
        if (sn) {
            this.surname = sn;
        }
    }
    return Dog;
}());
var user1;
user1 = new Person(30, 'asdda');
console.log(user1);
