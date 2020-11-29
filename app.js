var admin1 = {
    name: "",
    privileges: ['dddsa'],
    startDate: new Date()
};
function addA(a, b) {
    // typeof === ... is a type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function showEmployee(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
showEmployee(admin1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('brum');
        return this;
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('BRUM');
        return this;
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("loading " + amount);
        return this;
    };
    return Truck;
}());
function driveVehicle(veh) {
    veh.drive();
    // Type guard in classes
    if (veh instanceof Truck) {
        veh.loadCargo(1000);
    }
}
driveVehicle((new Car()));
driveVehicle((new Truck()));
function getSpeed(animal) {
    switch (animal.type) {
        case 'cat':
            return animal.runningSpeed;
        case 'bird':
            return animal.flyingSpeed;
    }
}
getSpeed({ type: 'bird', flyingSpeed: 10 });
// Will throw errors
// getSpeed({type: 'cat', flyingSpeed: 10});
// Type casting to an HTMLInputElement so we can set the 'cake'
// const userInputEl = <HTMLInputElement>document.querySelector('#user-input');
// Alternative method which works with React
var userInputEl = document.querySelector('#user-input');
userInputEl.value = 'cake';
var errorBag = {
    id: "loginForm",
    email: 'email must be valid email address',
    username: 'username must be filled in'
};
