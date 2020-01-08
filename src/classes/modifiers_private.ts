class Animal {
    // private: mCan not be accessed from outsider of  class
    private name: string;
    constructor(theName: string) { this.name = theName; }

    getName(): string {
        return this.name;
    }
}

export function test_modifiers_private(): void {
    // new Animal("Cat").name; // Error: 'name' is private;
    const name = new Animal("Cat").getName();
    console.log(name);  // Cat
}