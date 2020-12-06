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