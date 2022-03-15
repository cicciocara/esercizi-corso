const sum = (a, b) => `(${a} + ${b})`;

const subtract = (a, b) => `${a} - ${b})`;

const multiply = (a, b) => `(${a} * ${b})`;

const divide = (a, b) => `${a} / ${b}`;

const log = (value) => console.log(value);

let firstSum = sum(2, 4);
let SecondSum = sum(5, 2);
let product = multiply(firstSum, SecondSum);
let subtraction = subtract(product, 2);
let division = divide(subtraction, 5);
log(division);
