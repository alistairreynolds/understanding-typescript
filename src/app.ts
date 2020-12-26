import construct = Reflect.construct;

function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function <T extends { new(...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Me';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjDescriptor;
}

/////////////////////
// Autobinding
/////////////////////

class Printer {
    message = 'This works!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();
p.showMessage();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);


/////////////////////
// Validation
/////////////////////


// Create an interface for storing the validators we want to register
interface ValidatorConfig {
    [property: string]: {
        [validatedProp: string]: string[] // Will look like ['required', 'positive'...]
    }
}

const registeredValidators: ValidatorConfig = {}


function Required(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        // Concatinate the rules together
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['required']
    }
}

function PositiveNumber(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['positive']
    }
}


function validate(obj: any) {
    const validatorProperties = registeredValidators[obj.constructor.name];
    if(!validatorProperties){
        // No validation rules, return true
        return true;
    }

    let isValid = true;

    // Loop through each property being validated in the object
    for (const prop in validatorProperties){
        // Loop through each rule in the indexed property
        for (const rule of validatorProperties[prop]){
            switch (rule) {
                case 'required':
                    // Return true if property of object is not true (ie, empty)
                    isValid = isValid && !!obj[prop]
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0
                    break;
            }
        }
    }

    return isValid;
}

class Course {

    @Required
    title: string;

    @Required
    @PositiveNumber
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}


const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {

    event.preventDefault();

    const titleEl = document.querySelector('#title') as HTMLInputElement;
    const priceEl = document.querySelector('#price') as HTMLInputElement;

    const title = titleEl.value;
    // + - convert to number
    const price = +priceEl.value;

    let course = new Course(title, price);
    if (!validate(course)) {
        console.warn('invalid');
        return;
    }

    console.log(course);

})
