// ----------------------------------------CONDITIONAL----------------------------------------
// logical operator : (! Logical NOT), (&& logical AND), (|| logical OR), (& Bitwise AND), (| Bitwise OR)

// logical NOT operator (true --> false) and (false -> true)
const hasMarried = false;
const inverted = !hasMarried;
console.log(inverted);

// logical && AND
const hasTicket = true;
const isAdult = false;
const canEnter = hasTicket && isAdult;
console.log(canEnter); //example false

// Logical || OR
const isStudent = false;
const isSenior = true;
const getDicount = isStudent || isAdult;
console.log(getDicount); //example true

// conditional branching
// [if statement] [switch statement] [ternary]
// if statement
const testScore = 60;
if (testScore >= 80){
    console.log("Bagus");
} else if(testScore >= 60){
    console.log("Biasa")
}else {
    console.log("Tidak lulus")
};

// switch statement
const day = 2;
switch (day){
    case 1: // this mean day === 1
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesdau");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Unknown day");
        break;
};

// Ternary operator ----> reminder operator
let reminder = 11 % 3
console.log(reminder);

let reminderMins = 2 % 3
console.log(reminderMins);

const number = 5;
const isEven =  number % 2 === 0;
console.log(isEven);

// use library from NPM
const readline = require("readline-sync");
const name = readline.question("Enter a name: ");
console.log("Nama saya adalah " + name);