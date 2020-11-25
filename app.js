"use strict";
let user1;
user1 = {
    name: 'sad',
    age: 3,
    greet(greeting) {
        console.log(`${greeting} ${this.name}`);
    }
};
