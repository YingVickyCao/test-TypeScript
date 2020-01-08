class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
    getName(): string {
        return this.name;
    }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }

    getName(): string {
        return this.name;
    }
}

export function test_modifiers_private2(): void {
    let animal = new Animal("Goat");
    console.log(animal.getName());  // Goat

    let rhino = new Rhino();
    console.log(rhino.getName());  // Rhino

    animal = rhino;
    console.log(animal.getName());  // Rhino
    console.log(rhino.getName());   // Rhino

    let employee = new Employee("Bob");
    // animal = employee; // Error: 'Animal' and 'Employee' are not compatible
}