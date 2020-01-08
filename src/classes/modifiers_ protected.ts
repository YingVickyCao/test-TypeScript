class Person {
    // protected can also be accessed within deriving classes
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `${this.name} works in ${this.department}.`;
    }
}

export function test_modifiers_protected(): void {
    let howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch()); // Howard works in Sales.
    // console.log(howard.name); // error
}