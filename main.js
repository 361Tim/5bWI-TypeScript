"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello World';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'TypeScript';
var isBeginner = true;
var total = 0;
var name = "TIm";
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
var n = null;
var u = undefined;
var list11 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["BLue"] = 7] = "BLue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
