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
    privileges: [],
    startDate: new Date()
}


// Can intersect unions too
type Combinable = number | string;
type Numeric = number | boolean;

type Anything = Combinable & Numeric;