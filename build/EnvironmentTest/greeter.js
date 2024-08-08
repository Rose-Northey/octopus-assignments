"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
exports.default = Greeter;
