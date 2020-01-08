// Accessors:get and set

// class Employee {
//     myName: string;

//     constructor(private name: string) {
//         this.myName = name;
//     }
// }

// export function test_setter_checks(): void {
//     let employee = new Employee("Tom");
//     if (employee.myName) {
//         console.log(employee.myName);
//     }

//     employee.myName = "Jerry";
//     if (employee.myName) {
//         console.log(employee.myName);
//     }
// }


const cat_name = "Jerry";
class Employee {
    // TODO:
    // ERROR:Property '_myName' has no initializer and is not definitely assigned in the constructor.  TS2564
    // private _myName: string;
    private _myName: string = "";

    // constructor(private name: string) {
    //     this._myName = name;
    // }

    get myName(): string {
        return this._myName;
    }

    set myName(newName: string) {
        if (newName && newName === cat_name) {
            throw new Error(newName + " is not one Employee name. It's Cat");
        }
        this._myName = newName;
    }
}

export function test_setter_checks(): void {
    let employee = new Employee();
    if (employee.myName) {
        console.log(employee.myName);
    }

    employee.myName = "Jerry";  // ERROR:Uncaught Error: Jerry is not one Employee name. It's Cat
    if (employee.myName) {
        console.log(employee.myName);
    }
}