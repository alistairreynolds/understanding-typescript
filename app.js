var admin1 = {
    name: "",
    privileges: ['dddsa'],
    startDate: new Date()
};
function add(a, b) {
    // typeof === ... is a type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// TS knows it will return a string because of the function overload
add(3, 'dfs');
// TS knows it will return a number because of the function overload
add(3, 3);
function addAll() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.every(function (arg) { return typeof arg === 'number'; })) {
        var total_1 = 0;
        args.map(function (arg) {
            return total_1 += parseInt(arg.toString());
        });
        return total_1;
    }
    else {
        return args.join('');
    }
}
addAll(1, 2, 3, 4);
addAll('1', 2, 3, 4);
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
