export { };
let message = 'Hello World';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'TypeScript';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "TIm";

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list11: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Chris', 22];

enum Color { Red = 5, Green, BLue };

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}
console.log(myVariable.name);
myVariable();
(myVariable as string).toUpperCase();