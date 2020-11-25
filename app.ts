interface Person {
    name: string;
    age: number;

    greet(greeting: string): void;
}

let user1: Person;

user1 = {
    name: 'sad',
    age: 3,
    greet(greeting: string) {
        console.log(`${greeting} ${this.name}`)
    }
}