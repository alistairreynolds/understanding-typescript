"use strict";
var person = {
    name: "Alistair",
    age: 34,
    hobbies: ['cake', "pizza"],
    role: [2, 'dev']
};
// Throws an error because tuple index 1 = number
// person.role[1] = 4;
var hobbies;
hobbies = ['cake', 'pizza'];
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby.toUpperCase());
}
