// 15-sum-the-major-diagonal-in-matrix
/*
Write a program that reads a 4-by-4 matrix and displays the sum of all its elements on the major diagonal. Major diagonal refers to the elements running from the top-left corner to the bottom-right corner.

Here is a sample run:
Enter a 4-by-4 matrix row by row:
1 2 3 4.0 (enter)
5 6.5 7 8 (enter)
9 10 11 12 (enter)
13 14 15 16 (enter)
Sum of the elements in the major diagonal is 34.5
Use a two-dimensional array to represent the matrix, and complete the following function to calculate the sum.
function sumMajorDiagonal(m) {
  // Your implementation here
}

*/

const readlineSync = require('readline-sync');

console.log('Enter a 4-by-4 matrix row by row: ');

const MATRIX_SIZE = 4;
const matrix = []; 
for (let i = 0; i < MATRIX_SIZE; i++) {
    matrix.push(readlineSync.question(`Enter row - ${i}: `).split(' ').map(Number.parseFloat)); 
};

// console.log(matrix);
// const matrix = [
//   [ 1, 2, 3, 4 ],
//   [ 5, 6.5, 7, 8 ],
//   [ 9, 10, 11, 12 ],
//   [ 13, 14, 15, 16 ]
// ];

function sumMajorDiagonal() {
    let sum = 0;
    for (let i = 0; i < MATRIX_SIZE; i++) {
        sum += matrix[i][i]
    }
    return sum;
}

function sumMajorAntiDiagonal() {
    let sum = 0;
    for (let i = 0; i < MATRIX_SIZE; i++) {
        sum += matrix[i][MATRIX_SIZE - 1 -i];
    }
    return sum;
}

console.log(`Sum of the element in the major diagonal is: ${sumMajorDiagonal(matrix)}`)
console.log(`Sum of the element in the major anti diagonal is: ${sumMajorAntiDiagonal(matrix)}`)