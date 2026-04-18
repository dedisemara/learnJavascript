// 12-find-largest-element
/*
In this assignment, your task is to find the largest element in a table. The output must be in the format (row, column)—for example, (1, 2). Note that the row and column indices are zero-indexed.
*/
/*
Enter the number of rows and columns in the array: 3 4
Enter the array:
23.5 35 2 10 (Enter)
4.5 3 45 3.5 (Enter)
35 44 5.5 9.6 (Enter)
The location of the largest element is 45 at (1, 2)
*/
/*
The (Enter) in the sample above is not literal text; it indicates that the user pressed the Enter key on their keyboard. You are required to use a two-dimensional array for this assignment.
Please use the .split() method on the input string to extract the individual values separated by whitespace.
*/
const readlineSync = require('readline-sync');

const rowsColomnsStrs = readlineSync.question('Enter the number of rows and columns in the array: ').split(' ');
const rows = +rowsColomnsStrs[0];
const columns = +rowsColomnsStrs[1];
console.log('Enter the array:')

const tables = [];
let maxValue = Number.MIN_SAFE_INTEGER;
let maxValueRow;
let maxValueColumn;

for (let row = 0; row < rows; row++){
    let values;

    while(true){
        values = readlineSync.question(`Enter value of row ${row}: `).split(' ');
        if (values.length === columns){
            break;
        }
        console.log('Please input the correct number');
    }
    for (let i = 0; i < values.length; i++){
        const integerValues = +values[i];
        if (integerValues > maxValue){
            maxValue = integerValues;
            maxValueRow = row;
            maxValueColumn = i;
        }
    }
}
console.log(`The location of the largest element is ${maxValue} at (${maxValueRow}, ${maxValueColumn})`)