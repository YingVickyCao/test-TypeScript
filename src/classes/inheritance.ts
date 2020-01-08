class Animal {
    // Each member is public by default
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(m: number = 0): void {
        console.log("Animal move " + m + " distance")
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super("Small " + name);
    }

    bark() {
        console.log("dog bark:Woof Woof !")
    }
}

class Snake extends Animal {
    move(m: number = 0): void { // 覆盖
        console.log("Snake move " + m + " distance")
        super.move(m);  // super
    }
}

/**
 * 1 构造函数:只能有一个
 * 2 重写构造函数
 * 3 重写函数
 * 4 调用super 函数
 * 5 调用super 构造函数
 * 6 public, private, protected modifiers
 */
export function test_inheritance(): void {
    // const dog = new Dog(); 
    const dog = new Dog('Dog');
    dog.bark(); // dog bark:Woof Woof !
    dog.move(10)     // Animal move 10 distance
    console.log(dog.name);  // Small Dog

    // const snake: Animal = new Snake();
    const snake: Animal = new Snake("Snake");
    // Snake move 10 distance
    // Animal move 10 distance  : super.move(m);
    snake.move(10);
    console.log(snake.name);    // Snake
}