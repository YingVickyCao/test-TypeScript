//  Readonly modifier

class Octopus {
    // name,numberOfLegs,numberOfLegs2
    readonly name: string;
    readonly numberOfLegs: number = 8;

    // Constructor Parameter : accessibility modifier(Public, private, and protected) or readonly
    constructor(theName: string, readonly numberOfLegs2: number) {
        this.name = theName;
        this.numberOfLegs2 = numberOfLegs2;
    }
}
export function test_modifier_Readonly(): void {
    let dad = new Octopus("Man with the 8 strong legs", 8);
    console.log(dad.name);  // Man with the 8 strong legs     
    console.log(dad.numberOfLegs);  // 8       
    console.log(dad.numberOfLegs2);  // 8       
    // dad.name = "Man with the 3-piece suit"; // ERROR:Cannot assign to 'name' because it is a read-only property.ts(2540)
}