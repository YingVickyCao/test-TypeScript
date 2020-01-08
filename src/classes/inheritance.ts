class Animal {
    move(m: number = 0): void {
        console.log("Animal move " + m + " distance")
    }
}

class Dog extends Animal {
    move(m: number = 0): void {
        console.log("Dog move " + m + " distance")
    }

    bark() {
        console.log("dog bark:Woof Woof !")
    }
}

export function test_inheritance(): void {
    const dog = new Dog();
    dog.bark(); // dog bark:Woof Woof !

    // Animal move 10 distance
    // Dog move 10 distance
    dog.move(10)
}