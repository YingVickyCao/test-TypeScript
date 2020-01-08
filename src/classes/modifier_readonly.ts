//  Readonly modifier

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
export function test_modifier_Readonly(): void {
    let dad = new Octopus("Man with the 8 strong legs");
    console.log(dad.name);  // Man with the 8 strong legs                                                                   
    // dad.name = "Man with the 3-piece suit"; // ERROR:Cannot assign to 'name' because it is a read-only property.ts(2540)
}