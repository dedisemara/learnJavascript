// ----------------------------------------MORE ABOUT FUNCTION----------------------------------------
// function expression --> in javascript, function is a value
const age = 19;
let logGreating;

if (age <= 12) {
    logGreating = function() {
        console.log('Selamat siang adik-adik!');
    };
} else if (age <=  18) {
    logGreating = function() {
        console.log('Selamat pagi teman-teman!');
    };
} else {
    logGreating = function() {
        console.log('selamat siang bapak/ibu!')
    }
}
logGreating();

// combine two function as a variable
function name(calc) {
    return calc(4 , 5);
}
function sum(a, b) {
    return a + b;
}
const result = name(sum);
console.log(result);

// block body arrow function
const double = n => {
    return n * 2;
}
const resultDouble = double(16);
console.log(resultDouble)

// concise body arrow function
const double1 = n => n * 2;
console.log(double1(72));

// concise body arrow function with two param
const sumFunction = (a , b) => a + b;
console.log(sumFunction(100 , 86));

// concise body arrow function without params
const hello = () => console.log('Hello World');
hello();
