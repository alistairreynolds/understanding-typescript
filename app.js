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
class ITDepartment extends Department {
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
class AccountingDepartment extends Department {
    describe() {
        console.log(`Department: Accounting Dept`);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(2, 'accounting');
        return this.instance;
    }
}
const itDept = new ITDepartment(1, ['dave', 'susan']);
const accountingDept = AccountingDepartment.getInstance();
