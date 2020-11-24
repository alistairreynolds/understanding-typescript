"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const accounting = new Department('accounting');
// Won't work because we've explicitly stated what "this" refers to
const accountingCopy = { describe: accounting.describe };
// console.log(accountingCopy.describe());
// Will work because we've set a name for it
const accountingOtherCopy = { name: 'cake', describe: accounting.describe };
console.log(accountingOtherCopy.describe());
