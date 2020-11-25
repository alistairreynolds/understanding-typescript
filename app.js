"use strict";
class Department {
    constructor(_id, name) {
        this._id = _id;
        this.name = name;
        this.employees = [];
    }
    get id() {
        return this._id;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesCount() {
        console.log(this.employees.length);
    }
}
class ITDept extends Department {
    constructor(_id, admins) {
        super(_id, 'IT');
    }
    addEmployee(employee) {
        if (employee === 'dave') {
            return;
        }
        this.employees.push(employee);
    }
    describe() {
        console.log(`Department: IT Dept`);
    }
}
const itDept = new ITDept(2, ['dave', 'susan']);
