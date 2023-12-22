let apples = 5;
let speed = "Fast";
let hasName = true;
let nothingMuch = null;
let nothing = undefined;

// Built in Objects
let now: Date = new Date();

// Arrays
let colors = ["red", "green", "blue"];
let myNumbers = [1, 2, 3];
let myBooleans = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number; z: number } = {
  x: 10,
  y: 20,
  z: 30,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

logNumber(1);

// Any Type

const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(json);
