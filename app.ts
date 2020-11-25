abstract class Department {
    protected employees: string[] = [];

    protected constructor(protected readonly _id: number, protected name: string) {
    }

    get id() {
        return this._id
    }

    abstract describe(this: Department): void       // Needs :void here for abstract methods

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeesCount() {
        console.log(this.employees.length);
    }
}


class ITDept extends Department {
    constructor(_id: number, admins: string[]) {
        super(_id, 'IT');
    }

    addEmployee(employee: string) {
        if (employee === 'dave') {
            return;
        }
        this.employees.push(employee);
    }

    describe(): void {
        console.log(`Department: IT Dept`);
    }

}

const itDept = new ITDept(2, ['dave', 'susan']);
