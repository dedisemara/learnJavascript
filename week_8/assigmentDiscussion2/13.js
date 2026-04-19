// 13-merge-two-lists
/*
Write a program that takes two lists and combine it into a new sorted list.

Here's the sample run:

Enter list1: 5 1 5 16 61 111
Enter list2: 4 2 4 5 6
The merged list is 1 2 4 4 5 5 5 6 16 61 111
*/

const readlineSync = require('readline-sync');

const arr1 = parseNumbers(readlineSync.question('Enter list1: '));
const arr2 = parseNumbers(readlineSync.question('Enter list2: '));

// data dami
// const arr1 = [ '5', '1', '5', '16', '61', '111' ];
// const arr2 = [ '4', '2', '4', '5', '6' ];

// function parseNumber
function parseNumbers(input){
    return input.split(' ').map(s => +s);
}


// shorting function
function short(arr){
    const occurrances = {};

    for (const num of arr){
        occurrances[num] = (occurrances[num] ?? 0) + 1; 
    }
    const shorted = [];
    for (const num in occurrances){
        for (let i = 0; i < occurrances[num]; i++){
            shorted.push(+num);
        }
    }
    return shorted;

}

const shorted = short(arr1.concat(arr2));
console.log(`The merged list is ${shorted.join(' ')}`);

