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


@WithTemplate('<h1></h1>', '#app')
class Person {
    name = 'me';
}

const person = new Person();