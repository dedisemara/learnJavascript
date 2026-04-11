// --------------------------------STRING--------------------------------
// company who influence single Quotes ('') --> airbnb style guide
// company who used double quotes ("") --> Jquery
// so you should follow your company rule before you write code. because all of it hava another roles
// we have spesific case when we should use single quotes or double quotes
// example
// console.log("He replied "OK""); // error
console.log('He replied "OK"'); //pass
// console.log('It's raining today'); // error
console.log("It's raining today"); // pass

// Special character
// (\n) --> new line
// (\' , \", \`) --> escaped character
// (\\) --> escaped Backslash
// (\t) --> Tab
// example
console.log('Error ocurred\nPlease try again'); // (\n) example
// console.log("He replied "OK""); // for resolved the problem use this think
console.log("He replied \"OK\"");
// console.log('It's raining today'); // for resolved the problem use this think
console.log('It\'s raining today');
console.log(`1 + 2 = ${1 + 2}`); // how to use backtick

const str = 'Hello';
console.log(str.length);
// index string --> starting from 0
// example
console.log(str.at(1));
// how to get the alphabet at the end of the sentence
console.log(str.at(str.length-1));
// or you can write like this
console.log(str.at(-1));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const string = 'JavaScript is fun';
console.log(string.indexOf('is'));
console.log(string.indexOf('Woow')); // this one is return -1 --> because he follow java
// you can get the boolean value of string use this case
if(string.includes('password')){
    console.log('Correct');
}else {
    console.log('wrong value');
}

// starts with to checking start of value
const url = 'https://example.com/profile'
if(url.startsWith('https:')){
    console.log('correct url');
}

// checking file format
const file = 'picture.jpg';
if(file.endsWith('.jpg')){
    console.log('correct file');
}

// -------------------------------How to get substring-------------------------
// you can chose three ways
// first --> .slice(start , end) --> most of all prefered use this think because it make another programer not confused when read your code
// second -> .substring(start , end) or .substring(end , start)
// third --> .substr --> don't use this syntac because this one only use for browser
// example
const str1 = "Semara";
console.log(str1.slice(1, 4));
// or you can used
console.log(str1.substring(4, 1)); // thats the same value

// bonus
// to check validation url you can use
const dediUlrl = 'https:/dedisemara.com';
const isValidateUrl = dediUlrl.includes('https') || dediUlrl.includes('http');

if(isValidateUrl){
    console.log('semangat dedi');
}

// to check validation file
const filename = 'semara.jpg';
const isValidateFile = 
    filename.startsWith('semara') 
    || filename.endsWith('.jpg') 
    || filename.includes('semara');

if(isValidateFile){
    console.log('pasti bisa');
}