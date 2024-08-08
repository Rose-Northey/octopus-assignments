"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greeter_1 = __importDefault(require("./greeter"));
describe('test the test', () => {
    test('return hello world when world input', () => {
        const expected = 'Hello, world';
        const greeter1 = new greeter_1.default('world');
        const actual = greeter1.greet();
        expect(actual).toBe(expected);
    });
});
