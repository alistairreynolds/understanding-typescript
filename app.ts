// Defining as a type
// type AddFn = (a: number, b: number) => number;

// Defining as an interface
interface AddFn {
    (a: number, b: number): number
}

let addT: AddFn;

addT = (a, b) => {
    return a + b;
}


interface Named {
    readonly name: string;
    readonly surname?: string;
}

interface Aged {
    age: number;
}

interface Greetable extends Named {
    greet(greeting: string): void;

    farewell?(message: string): void;
}


class Person implements Greetable, Aged {

    constructor(public age: number, public name: string, public surname?: string) {
    }

    greet(greeting: string) {
        console.log(`${greeting} ${this.name}`)
    }

    farewell(greeting: string) {
        console.log(`${greeting} ${this.name}`)
    }
}

class Dog implements Named {
    surname?: string;

    constructor(public name: string, sn?: string) {
        if(sn) {
            this.surname = sn;
        }
    }

}


let user1: Greetable;

user1 = new Person(30, 'asdda');

console.log(user1);