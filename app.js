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
    describe() {
        console.log(`Department: ${this.name}`);
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
}
const accounting = new Department(1, 'accounting');
const id = new ITDept(2, ['dave', 'susan']);
accounting.addEmployee('dave');
accounting.printEmployeesCount();
// Won't work because we've explicitly stated what "this" refers to
const accountingCopy = { describe: accounting.describe };
// console.log(accountingCopy.describe());
