class Person {
    protected name: string;
    // protected
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        // TODO:
        return `${this.name} works in ${this.department}.`;
    }
}



export function test_modifiers_protected2(): void {
    let howard = new Employee("A", "Sales");
    console.log(howard.getElevatorPitch()); // A works in Sales.
    // ERROR:Constructor of class 'Person' is protected and only accessible within the class declaration.  TS2674
    // let john = new Person("John"); // Error: The 'Person' constructor is protected
}