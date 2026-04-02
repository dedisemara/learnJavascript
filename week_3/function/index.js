// ----------------------------------------FUNCTION----------------------------------------
// syntac 
// function name(parameter) {
// block statement
// }
// example
function double(num) { // declare
    return num * 2; // declare
} //declare
double(3); // use
const doubleOf3 = double(3);
const doubleOf5 = double(5);
const doubleOf = double(double(5));
console.log(doubleOf3);
console.log(doubleOf5);
console.log(doubleOf);

// function can have multiple parameters
function calculationRectangleArea(width, height) {
    return width * height;
}
const area = calculationRectangleArea(5, 4);
console.log('Rectangle Area: ' + area);
const readlineSync = require('readline-sync');
const widthInput = readlineSync.question('Please input width value: ');
const heightInput = readlineSync.question('Please input height value: ');
const area1 = calculationRectangleArea(widthInput, heightInput);
console.log('Rectangle Area from input data: ' + area1);

// void function
function logGreeting(name) {
    console.log('Hello, ' + name + '!');
}
logGreeting('Dedi');
logGreeting('Semara');

// Function without parameters
function logMenu() {
    console.log('==MAIN MENU==');
    console.log('1. Sate Kambing');
    console.log('2. Nasi Goreng');
    console.log('3. Ayam Goreng');
}
logMenu();

// Function with looping
function sumTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
const dataTotal = sumTo(8);
console.log(dataTotal);

// Javascript built in function
// math function
console.log(Math.floor(3.2)); // 3 rounding decimal numbers down
console.log(Math.ceil(3.2)); // 4 rounding decimal numbers up
console.log(Math.round(3.2)); // 3 rounding use role (if decimal value < 0,5 it will make rounding down; if decimal value >= 0,5 it will be rounded up)
console.log(Math.trunc(3.2)); // 3 if will errase decimal value
// diverent trunc and round
console.log(Math.floor(4.7)); // 4
console.log(Math.trunc(4.7)); // 4
console.log(Math.floor(-4.7)); // -5 (value = - x - floor)
console.log(Math.trunc(-4.7)); //-4
// math random created Math.random()
console.log(Math.random());
// Example: generating random values ​​with a JavaScript function. The resulting value must be a rounded value (floor).
function generateRandomValue() {
    return Math.floor(Math.random() * 10);
}
console.log(generateRandomValue());

/**
 * `generateRandomNumber` is a function that
 * return a numbers between 0 to 5
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * 6);
}
console.log(generateRandomNumber());