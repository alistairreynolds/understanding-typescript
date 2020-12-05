// Create as a decorator factory so it can be customised when called
function Logger(logMsg: string){
    return function (constructor: Function){
        console.log(logMsg);
        console.log(constructor);
    }
}

@Logger('Logging - person')
class Person{
    name = 'me';
    constructor() {
        console.log('Creating person');
    }
}


const person = new Person();

console.log(person);