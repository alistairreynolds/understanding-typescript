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
var user1 = new Person(30, 'asdda');
console.log(user1);
