"use strict";
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["DEV"] = 1] = "DEV";
    Role[Role["ADMIN"] = 99] = "ADMIN";
})(Role || (Role = {}));
var person = {
    name: "Alistair",
    age: 34,
    hobbies: ['cake', "pizza"],
    role: Role.ADMIN
};
// Throws an error because tuple index 1 = number
// person.role[1] = 4;
var hobbies;
hobbies = ['cake', 'pizza'];
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby.toUpperCase());
}
