// -------------------------------------- NUMBER ----------------------------------------------
const num = 1000000;
const num1 = 1_000_000; // medium programer
const num2 = 1e6; // pro programer --> 1e6 means = 1 * 10 ** 6;
const num3 = 4e6; // 4e6 means = 4 * 10 ** 6;
console.log(num);
console.log(num1);
console.log(num2);
console.log(num3);

// this is for reduce 0 from 1_000_000
const num4 = 2e-6;
console.log(num4);

// conversion to another numbering system
// x.toString(Radix);
// example
const n = 255;
console.log(n.toString(2));
console.log(n.toString(16));
// const result = 225.toString(16); // this will be error because he will read it comma
// console.log(result);
// in JavaScript n = 255.0 === n 255. (only .)
// in JavaScript if you want do number + method input two point (..)
const result = 225..toString(16);
console.log(result);

// SPECIAL NUMERIC VALUE 
// Infinity && NaN
console.log(typeof NaN); // sould be number
console.log(typeof Infinity); // sould be number
// 5 < Infinity --> true
// 100 < Infinity --> true
// 1e9 < Infinity --> true
// Number.MAX_SAFE_INTEGER < Infinity --> true --> MAX_SAFE_INTEGER === 2^53 - 1 === 9007199254740991
// Infinity have another bit on memory --> this set larger number
// Infinity can be explain like this
// const num = 5 / 0; --> Infinity
// const num = 1e500; --> Infinity
// and than where is NaN
// const num = 0 / 0; --> NaN
// const num = Math.sqrt(-1); --> NaN
// const num = Number("abc"); --> NaN
// conclusion
// infinity is larger value more than anything
// NaN is numeric operator whose the result can't be explained (error)
// question Infinity === Infinity --> true
// NaN === Nan --> false
// Number.isNan(NaN) --> true
console.log(+"100px") // --> NaN
// how to get 100 on 100px (number)
// use Number.parseInt(str) and Number.parseFloat(str);
const result1 = Number.parseInt("100px");
const result2 = Number.parseFloat("2.5cm");
console.log(result1);
console.log(result2);