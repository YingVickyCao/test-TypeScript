export interface P {
    firstName: string;
    lastName: string;
}

export class Person {
    fullName: string;

    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
}

export function hiPerson(person: Person) {
    return "Hi, " + person.firstName + " " + person.lastName + ",and full name is " + person.fullName;
}