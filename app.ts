abstract class Department {
    protected employees: string[] = [];

    constructor(protected readonly _id: number, protected name: string) {
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


class ITDepartment extends Department {
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


class AccountingDepartment extends Department {

    private static instance: AccountingDepartment;

    describe(): void {
        console.log(`Department: Accounting Dept`);
    }


    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment(2, 'accounting');
        return this.instance;
    }

}

const itDept = new ITDepartment(1, ['dave', 'susan']);
const accountingDept = AccountingDepartment.getInstance();
