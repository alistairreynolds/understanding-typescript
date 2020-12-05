// Decorator is just a function, usually Pascal case
function Logger(constructor: Function){
    console.log('Logging');
    console.log(constructor);
}

@Logger // Says you want to use a decorator here
class Person{
    name = 'me';

    constructor() {
        console.log('Creating person');
    }

}


const person = new Person();

console.log(person);