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


function addA(a: Combinable, b: Combinable){
    // typeof === ... is a type guard
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}


// Can intersect unions too
type Combinable = number | string;
type Numeric = number | boolean;

type Anything = Combinable & Numeric;


type UnknownEmployee = Admin | Employee;

function showEmployee(emp: UnknownEmployee){
    console.log(emp.name);
    if('privileges' in  emp ) {

        console.log(emp.privileges)
    }
    if('startDate' in  emp ) {
        console.log(emp.startDate)
    }
}

showEmployee(admin1)



class Car{
    drive(){
        console.log('brum')
        return this;
    }
}

class Truck{
    drive(){
        console.log('BRUM');
        return this;
    }

    loadCargo(amount: number){
        console.log(`loading ${amount}`)
        return this;
    }
}

type Vehicle = Car | Truck;

function driveVehicle(veh: Vehicle){
    veh.drive();
    // Type guard in classes

    if(veh instanceof Truck){
        veh.loadCargo(1000);
    }
}

driveVehicle((new Car()))
driveVehicle((new Truck()))