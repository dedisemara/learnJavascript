//------------------------------------- compile time error--------------------------------------
// error when the code can't compile to binary (device didn't translate code)

// Example V.1 because string did't have stop initiation ("). compiler will read all process string without stop 
// console.log("Hello World!);

// Example V.2 because variable name === reserved keyword (exp: let, switch, for, if, do) 
// let let = 2 + 5;
// console.log(let);


//------------------------------------- run time error--------------------------------------
// error when the code can compile to binary (device translate code) but when the binary processed it show error
// Example 1 -> dedi semara printed but code after that will stop running because error
// console.log('Dedi Semara');
// let age = null;
// console.log(age.name);

// Example 2 -> dedi semara did't printed because from first line code have issue when processing data
let age = null;
console.log(age.name);
console.log('Dedi Semara');


