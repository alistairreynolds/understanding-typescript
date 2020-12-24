// Create as a decorator factory so it can be customised when called
function Logger(logMsg: string) {
    return function (constructor: Function) {
        console.log(logMsg, constructor);
    }
}


function WithTemplate(template: string, selector: string) {
    console.log('TEMPLATE FACTORY');
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering template')
                const el = document.querySelector(selector);
                if (el) {
                    el.innerHTML = template;
                    el.querySelector('h1')!.textContent = this.name;
                }
            }
        }

    }
}

// Execute from the bottom up
@WithTemplate('<h1></h1>', '#app')
@Logger('creating person')
class Person {
    name = 'me';
}
// Now that we're returning a Class in the decorator, it will only handle the decorator when the class is instantiated
new Person();

// Target = the object it's assigned to
function LogProp(target: any, prop: string | Symbol) {
    console.log('*** Property decorator ***')
    console.log(target, prop)
}


// Describes a getter/setter
function LogDescriptor(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('*** Descriptor decorator ***')
    console.log(target, propName, descriptor);
}

// Describes a method
function LogMethod(target: any, methodName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('*** Function decorator ***')
    console.log(target, methodName, descriptor);
}

// Logs a method parameter
function LogParameter(target: any, methodName: string | Symbol, paramPos: number) {
    console.log('*** Param decorator ***')
    console.log(target, methodName, paramPos);
}

class Product {

    @LogDescriptor
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    @LogDescriptor
    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            throw('Cannot have negative price');
        }
    }

    get price(): number {
        return this._price;
    }

    @LogProp
    private _name: string;

    @LogProp
    private _price: number;

    constructor(n: string, p: number) {
        this._name = n;
        this._price = p;
    }


    @LogMethod
    getPriceWithTax(@LogParameter  tax: number = 1.178) {
        return this._price * tax;
    }
}