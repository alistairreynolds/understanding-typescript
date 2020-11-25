"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
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
const accounting = new Department(1, 'accounting');
accounting.addEmployee('dave');
accounting.printEmployeesCount();
// Won't work because we've explicitly stated what "this" refers to
const accountingCopy = { describe: accounting.describe };
// console.log(accountingCopy.describe());
