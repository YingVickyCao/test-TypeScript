export function test_basic_types() {
    // console.log('test')
    // test_boolean();
    // test_number();
    // test_string();
    // test_array();
    // test_tupe();
    test_enum();
}

// Boolean
function test_boolean() {
    let isLoading: boolean = false;
    console.log(isLoading);

    isLoading = true;
    console.log(isLoading);
}

// Number
function test_number() {
    let decimal_value: number = 6;  // 十进制
    console.log(decimal_value); // 6

    let hex_value: number = 0x00d; // 十六进制
    console.log(hex_value); // 13

    let binay_value: number = 0b0010; // 二进制
    console.log(binay_value);   // 2

    let octal_value: number = 0o0010; // 八进制
    console.log(octal_value);   // 8
}

// String
function test_string() {
    let color: string = "blue";
    console.log(color); // blue

    color = 'red';
    console.log(color); // red

    let age: number = 10;
    let name: string = 'Tom';
    let student_info: string = 'Hi, I am ${name} . age is ${age} ';
    console.log(student_info); // TODO:
}

// Array
function test_array() {
    let list1: number[] = [1, 2];
    console.log(list1); // [1, 2]

    let list2: Array<number> = [3, 4];
    console.log(list2);  // [3, 4]
}

// Tupe:size is fixed. type is knowed, not same
function test_tupe() {
    let data: [string, number];
    data = ["A", 1];
    console.log(data);  // ["A", 1]

    // data = [2, 'B'];// ERROR
    // console.log(data);

    console.log(data[0])    // A
    // console.log(data[10]) // ERROR:Tuple type '[string, number]' of length '2' has no element at index '10'.  TS2493

    data[0] = 'B'
    console.log(data[0])    // B

    // data[10] = 'B';  // ERROR:Tuple type '[string, number]' of length '2' has no element at index '10'.  TS2493
}

function test_enum() {
    enum Color { Red, Green, Blue = 20 }
    let color: Color = Color.Red;
    console.log(color);    // 0

    let color2: Color = Color.Green;
    console.log(color2);    // 1

    let color3: Color = Color.Blue;
    console.log(color3);                // 20
    console.log(color3.valueOf());      // 20
    console.log(color3.toString());     // 20

    let color4: Color;
    // console.log(color4.toString());  // ERROR:Variable 'color' is used before being assigned.  TS2454
    // console.log(color4.valueOf());   // ERROR:Variable 'color' is used before being assigned.  TS2454

    let colorName: string = Color[1]; // value -> name
    console.log(colorName); // Green
}