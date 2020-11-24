"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
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
const accounting = new Department('accounting');
accounting.addEmployee('dave');
// Won't work because we've explicitly stated what "this" refers to
const accountingCopy = { describe: accounting.describe };
// console.log(accountingCopy.describe());
