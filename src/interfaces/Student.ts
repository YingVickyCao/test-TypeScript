export interface Stu {
    firstName: string;
    lastName: string;
}

// TODO:
// function hi(stu: Stu) {
//     return "Hi, " + stu.firstName + " " + stu.lastName;
// }

function hiStu(stu: Stu) {
    return "Hi, " + stu.firstName + " " + stu.lastName;
}

let stu = {
    firstName: "Vanne",
    lastName: "Mimmie"
};

document.body.textContent = hiStu(stu);