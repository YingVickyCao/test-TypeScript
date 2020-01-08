export class Greeter {
    // 成员变量：greeting
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    getGreeting(): string {
        return this.greeting;
    }

    // getMessage(): string {
    //     return this.message; // ERROR:Property 'message' does not exist on type 'Greeter'.ts(2339)
    // }
}