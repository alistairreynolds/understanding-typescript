// Create as a decorator factory so it can be customised when called
function Logger(logMsg: string) {
    return function (constructor: Function) {
        console.log(logMsg);
        console.log(constructor);
    }
}


function WithTemplate(template: string, selector: string) {
    return function (constructor: any) {
        const el = document.querySelector(selector);
        const p = new constructor();
        if (el) {
            el.innerHTML = template;
            el.querySelector('h1')!.textContent = p.name;
        }
    }
}

// Execute from the bottom up
@WithTemplate('<h1></h1>', '#app')
@Logger('creating person')
class Person {
    name = 'me';
}

const person = new Person();

// Target = the object it's assigned to
function Log(target: any, prop: string | Symbol){
    console.log('Property decorator')
    console.log(target, prop)
}


class Product{
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if(value > 0){
            this._price = value;
        }else{
            throw('Cannot have negative price');
        }}

    @Log
    private _name: string;

    @Log
    private _price: number;

    constructor(n: string, p: number) {
        this._name = n;
        this._price = p;
    }


    getPriceWithTax(){
        return this._price * 1.175;
    }
}

const cake = new Product('cake', 10)