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