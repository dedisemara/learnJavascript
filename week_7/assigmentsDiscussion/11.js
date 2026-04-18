// 11-strictly-identical-arrays
/*
Enter list1: 5 2 5 6 1 6
Enter list2: 5 2 5 6 1 6
Two lists are strictly identical
Enter list1: 5 2 5 6 6 1
Enter list2: 5 2 5 6 1 6
Two lists are not strictly identical
Enter list1: 5 2 5 6 6 1
Enter list2: 5 2 5
Two lists are not strictly identical
*/
// use
// function equals(arr1, arr2) {
//   // Your implementation here
// }

function equals(data1, data2) {
    if(data1.length !== data2.length){
        return false;
    }
    for (let i = 0; i < data1.length; i++){
        if(data1[i] !== data2[i]){
            return false;
        }
    }
    return true;
}

const readlineSync = require('readline-sync');
const inputData1 = readlineSync.question('Enter list1: ');
const inputData2 = readlineSync.question('Enter list2: ');

const arr1 = inputData1.split(' ');
const arr2 = inputData2.split(' ');
if (equals(arr1, arr2)){
    console.log('Two lists are strictly identical');
} else {
    console.log('Two lists are not strictly identical');
}

// another way
console.log('---------------------------------------------')
console.log('---------------------------------------------')

function simpleEquals(arr1, arr2){
    return arr1.toString() === arr2.toString();
};
if (simpleEquals(arr1, arr2)){
    console.log('Two lists are strictly identical');
} else {
    console.log('Two lists are not strictly identical');
}
