// assigment 10-occurrence-of-numbers
/*
Enter the integers between 1 and 100: 2 5 6 5 4 3 23 43 2
2 occurs 2 times
3 occurs 1 time
4 occurs 1 time
5 occurs 2 times
6 occurs 1 time
23 occurs 1 time
43 occurs 1 time
*/

const readlineSync = require('readline-sync');
const inputData = readlineSync.question('Enter the integers between 1 and 100: ');

const strs = inputData.split(' ');
const integers = {};

for(const str of strs){
    const integer = +str;
    integers[integer] = typeof integers[integer] === 'number' 
        ? integers[integer] + 1 
        : 1
};
console.log(integers)
for(const data in integers){
    const occurrence = integers[data];
    console.log(`${data} occour ${occurrence} ${pluralize('time', occurrence)}`)
}
// function pluralize
function pluralize(str, count){
    return count > 1 ? `${str}s` : str; 
}

// another way
console.log('---------------------------------------------')
console.log('---------------------------------------------')
const integerOccurrence = {};
for (const integerStr of strs){
    const occurrence = (integerOccurrence[integerStr] || 0) + 1;
    integerOccurrence[integerStr] = occurrence;
}

for (const integerStr in integerOccurrence){
    const occurrence = integerOccurrence[integerStr];
    occurrence > 1 
        ? times = 'times' 
        : times = 'time'
    console.log(`${integerStr} occour ${occurrence} ${times}`)
}