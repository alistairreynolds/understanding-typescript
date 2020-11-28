// Defining as a type
// type AddFn = (a: number, b: number) => number;

// Defining as an interface
interface AddFn{
    (a: number, b:number): number
}

let addT: AddFn;

addT = (a, b) => {
    return a + b;
}



interface Named{
    readonly name: string;
}

interface Greetable extends Named{
    greet(greeting: string): void;
}


class Person implements Greetable{

    constructor(protected age: number, public name: string) {
    }

    greet(greeting: string) {
        console.log(`${greeting} ${this.name}`)
    }
}

let user1: Greetable;

user1 = new Person(30, 'asdda');

console.log(user1);