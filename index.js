// // ----------------------------------------DATA TYPE----------------------------------------
// // javascript has 8 data types: number, string, boolean, undifine, null, symbol, object
// // check typeof data
// let address;
// let age = 20;
// let name = "Dedi Semara"
// let isGraduated = true;
// let middleName = null

// console.log(typeof address);
// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof isGraduated);
// // typeof null === "object" is a bug, but fixing it would break a lot of code on the global web === this bug come from creator javascript
// console.log(typeof middleName); 
// // type conversion -> typeof typeof boolean to string
// console.log(typeof typeof true);

// // -----------Type Conversion Manual-------------
// // if value save as string, it use more memory because it read "2" and "0" 
// // but if it read as number it will read only 20
// // number to string
// let age = 20;
// let converted = String(age);
// console.log(typeof converted);
// // string to number
// let str = "123";
// let num = Number(str);
// console.log(typeof num);
// // boolean true
// console.log(Boolean(1));
// console.log(Boolean("false"));
// console.log(Boolean(" "));
// // boolean false
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// // -----------Type Automatic Conversion === type coercion-------------
// // it will run because bug of system javascript === it will convert string to number automatic
// // (* or /) it will run matematic operation
// let result = "8" / "2";
// console.log(result);
// console.log(typeof result);
// // example (+). JavaScript provides several methods for string concatenation, the process of joining two or more strings into a single string. The most common methods are using the + operator
// let age = 20;
// let text = age + " years old";
// console.log(text);
// console.log(typeof text);
// // hexadecimal
// let number = 0x7D;
// console.log(number);
// // hexadecimal from sting
// let str = '7D';
// const num = Number.parseInt(str, 16);
// console.log(num);
// let str1 = '10';
// const num1 = Number.parseInt(str1, 16);
// console.log(num1);
// const num2 = Number.parseInt(str1);
// console.log(num2);

// ----------- Equality Operator-------------
// in database endcoding "A" == 65 and "a" == 97
console.log(Boolean("a" == "A"));
// unique case in javascript because type coersion in "=="
console.log(Boolean("10" == 10));
// if you want to stike role use two step process "==="
// 1. are the data type the same 2. do === process
// example false
console.log(Boolean("10" === 10));
// example true
console.log(Boolean(10 === 10));
// example false because not equality
console.log(Boolean(5 !==  5));
// note: always use (=== or !==)