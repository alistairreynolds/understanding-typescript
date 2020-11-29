// Create an Admin type...
type Admin = {
    name: String;
    privileges: String[];
}

// ...and an Employee type
type Employee = {
    name: String;
    startDate: Date;
}

// ...join them together as an intersect
type ElevatedEmployee = Admin & Employee;

const admin1: ElevatedEmployee = {
    name: "",
    privileges: ['dddsa'],
    startDate: new Date()
}


function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable): string;
function add(a: Combinable, b: Combinable) {
    // typeof === ... is a type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

// TS knows it will return a string because of the function overload
add(3, 'dfs')

// TS knows it will return a number because of the function overload
add(3, 3)


function addAll(...args: number[]): number;
function addAll(...args: Combinable[]): string;
function addAll(...args: Combinable[]) {
    if (args.every(arg => typeof arg === 'number')) {
        let total: number = 0;
        args.map(arg => {
            return total += parseInt(arg.toString());
        });
        return total;
    } else {
        return args.join('');
    }
}

addAll(1, 2, 3, 4);
addAll('1', 2, 3, 4);


// Can intersect unions too
type Combinable = number | string;
type Numeric = number | boolean;

type Anything = Combinable & Numeric;


type UnknownEmployee = Admin | Employee;

function showEmployee(emp: UnknownEmployee) {
    console.log(emp.name);
    if ('privileges' in emp) {

        console.log(emp.privileges)
    }
    if ('startDate' in emp) {
        console.log(emp.startDate)
    }
}

showEmployee(admin1)


class Car {
    drive() {
        console.log('brum')
        return this;
    }
}

class Truck {
    drive() {
        console.log('BRUM');
        return this;
    }

    loadCargo(amount: number) {
        console.log(`loading ${amount}`)
        return this;
    }
}

type Vehicle = Car | Truck;

function driveVehicle(veh: Vehicle) {
    veh.drive();
    // Type guard in classes

    if (veh instanceof Truck) {
        veh.loadCargo(1000);
    }
}

driveVehicle((new Car()))
driveVehicle((new Truck()))


// Discriminated unions
interface Cat {
    type: 'cat';
    runningSpeed: number;
}

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

type Animal = Bird | Cat;


function getSpeed(animal: Animal) {
    switch (animal.type) {
        case 'cat':
            return animal.runningSpeed
        case 'bird':
            return animal.flyingSpeed
    }
}

getSpeed({type: 'bird', flyingSpeed: 10});

// Will throw errors
// getSpeed({type: 'cat', flyingSpeed: 10});

// Type casting to an HTMLInputElement so we can set the 'cake'
// const userInputEl = <HTMLInputElement>document.querySelector('#user-input');
// Alternative method which works with React
const userInputEl = document.querySelector('#user-input') as HTMLInputElement;
userInputEl.value = 'cake';


interface ErrorContainer {
    id: string,

    [prop: string]: string
}

const errorBag: ErrorContainer = {
    id: "loginForm",
    email: 'email must be valid email address',
    username: 'username must be filled in'
}