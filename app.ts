class Department {
    private employees: string[] = [];

    constructor(public readonly _id: number, private name: string) {
    }

    get id(){
        return this._id
    }

    describe(this: Department) {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeesCount() {
        console.log(this.employees.length);
    }
}

const accounting = new Department(1, 'accounting')

accounting.addEmployee('dave');
accounting.printEmployeesCount();

// Won't work because we've explicitly stated what "this" refers to
const accountingCopy = {describe: accounting.describe};
// console.log(accountingCopy.describe());