interface P {
    firstName: string;
    lastName: string;
}

class Person {
    // 成员变量：fullName,firstName,lastName
    fullName: string;

    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
    getFirstName(): string {
        return this.firstName;
    }
}

function hiPerson(person: Person) {
    return "Hi, " + person.firstName + " " + person.lastName + ",and full name is " + person.fullName;
}

export function test_class(): void {
    let p = new Person("Vanne", "Mimmie");
    let p_namme = hiPerson(p);
    console.log(p_namme); // Hi, Vanne Mimmie,and full name is Vanne Mimmie
    console.log(p.getFirstName()); // Vanne
}