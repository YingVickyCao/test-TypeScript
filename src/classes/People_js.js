class P1 {
  constructor() {
    this.name = "P1";
  }
}

class P2 {
  constructor(name) {
    this.name = name;
  }
}

class P3 {
  name;
  constructor(name) {
    this.name = name;
  }
}

class C3 extends P3 {
  height;
  //   Line 24:5:  Expected an assignment or function call and instead saw an expression  no-unused-expressions
  constructor(name) {
    super(name);
    this.height = "";
  }

  get info() {
    //   Line 26:26:  Unexpected use of 'innerWidth'  no-restricted-globals
    // return this.height * innerWidth;
    return this.name + "," + this.height;
  }

  setHeight(height) {
    this.height = height;
  }

  height(height) {
    this.height = height;
  }
}

export function test_js_classes() {
  const p1 = new P1();
  console.log(p1.name); // P1

  const p2 = new P2("P2");
  console.log(p2.name); // P2

  const p3 = new P3("P3");
  console.log(p3.name); // P3

  const c3 = new C3("C3");
  console.log(c3.name); // C3
  console.log(c3.info); // C3,undefined
  c3.setHeight(31);
  console.log(c3.info); // C3,31
  c3.height = 32;
  console.log(c3.info); // C3,32
}
