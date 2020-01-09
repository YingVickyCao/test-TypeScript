export function test_basic_types() {
    // console.log('test')
    // test_boolean();
    // test_number();
    // test_string();
    // test_array();
    // test_tupe();
    // test_enum();
    test_any();
    // test_void();
    // test_null();
    // test_underfined();
    // test_null();
    // test_never();
    // test_object();
    // test_type_assertions();
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

// Enum
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

// Any
function test_any() {
    {
        let not_sure: any = 4;
        console.log(not_sure);  // 4

        not_sure = "Current is a string";
        console.log(not_sure);  // Current is a string

        not_sure = false;
        console.log(not_sure);  // false
    }

    // TODO:
    {
        // let not_sure: any = 4;
        // not_sure.ifItExists(); // ERROR
        // not_sure.toFixed();  // ERROR
    }
}

// Void: only can set undefined
function test_void(): void {// function not return a value
    // let value: void;
    // console.log(value) // ERROR: Variable 'value' is used before being assigned.  TS2454

    let value: void = undefined;
    console.log(value); // undefined

    // ERROR:Type 'null' is not assignable to type 'void'.  TS2322
    // OK if '--strictNullChecks' is not given
    // value = null;
    // console.log(value);
}

// Null
function test_null() {
    let value: null = null;
    console.log(value); // undefined
    // value = '5';  // ERROR:Type '"5"' is not assignable to type 'null'.  TS2322 => '--strictNullChecks'

    let str: string = '4';
    console.log(str);   // 4
    // num = null; // ERROR:Type 'null' is not assignable to type 'string'.  TS2322  =>  '--strictNullChecks'

    let str2: string | null = '4';  // union type: string | null
    console.log(str2);   // 4
    str2 = null;
    console.log(str2); // null

    // let str3: string = null; // ERROR:Type 'null' is not assignable to type 'string'.  TS2322
}

// Undefined
function test_underfined() {
    let value: undefined = undefined;
    console.log(value); // undefined
    // value = '5';  // ERROR:Type '"5"' is not assignable to type 'undefined'.  TS2322 => '--strictNullChecks'

    let str: string = '4';
    console.log(str);   // 4
    // num = undefined; // ERROR:Type 'undefined' is not assignable to type 'string'.  TS2322  =>  '--strictNullChecks'

    let str2: string | undefined = '4';  // union type: string | undefined
    console.log(str2);   // 4
    str2 = undefined;
    console.log(str2); // undefined

    // let str3: string = undefined; // ERROR:Type 'undefined' is not assignable to type 'string'.  TS2322
}

// Never
// TODO:使用场景
function test_never() {
    fail();
}

// function error(message: string): never {
//     return new Error(message); // ERROR:Type 'Error' is not assignable to type 'never'.ts(2322) 
// }

function fail() {
    // return error('loading failed');
}

// Object                                      
// TODO:
function test_object() {
    // create(o: object | null): any;
    // let v1: null = Object.create(null);
    // console.log(v1); // {}
    // console.log(Object.create({ prop: 0 })); // {}
    // Object.create(42);  // ERROR:Argument of type '42' is not assignable to parameter of type 'object | null'.  TS2345
    // Object.create('Str');   // ERROR:Argument of type '"Str"' is not assignable to parameter of type 'object | null'.  TS2345
    // Object.create(false);   // ERROR:Argument of type 'false' is not assignable to parameter of type 'object | null'.  TS2345
    // Object.create(undefined);   // ERRROR:Argument of type 'undefined' is not assignable to parameter of type 'object | null'.  TS2345
}

// Type assertions:Compile time, no runtime impact
function test_type_assertions() {
    {
        let value: any = "ABC";
        let strLen: number = (<string>value).length;
        let strLen2: number = (value as string).length;
        console.log(strLen)     // 3 
        console.log(strLen2)    // 3 
    }

    {
        let value: any = 10;
        // 仅仅目的具体类型是什么，即使不匹配，no error,too
        let strLen: number = (<string>value).length;
        console.log(strLen)     // undefined+
    }
}