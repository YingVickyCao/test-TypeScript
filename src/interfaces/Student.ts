export interface Stu {
    firstName: string;
    lastName: string;
}

// TODO:
// function hi(stu: Stu) {
//     return "Hi, " + stu.firstName + " " + stu.lastName;
// }

export function hiStu(stu: Stu) {
    return "Hi, " + stu.firstName + " " + stu.lastName;
}