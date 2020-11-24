class Department{
    private name: string;
    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Department('accounting')
console.log(accounting);