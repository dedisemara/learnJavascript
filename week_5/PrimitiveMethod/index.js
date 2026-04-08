// ------------------------------- PRIMITIVE METHOD -------------------------------------------
// javascript data types --> Primitive type and Objective type
//  Advantages and disadvantages of javascript data types
// Primitive type
// example primitive type
const num = 3.142; // Advantages --> doesn't have method && disadvantages --> light
// example objective type
const person = {
    name: "Dedi",
    age: 27,
}; // adbantages --> have method && disadvantages --> heavy
// why we should know abouth that --> Paradox
// how to insert method to primitive data type
// using --> x.toUpperCase(); --> x.toLowerCase(); --> x.split();
// if primitive data types convert to objective data types it is not light anymore
// then use OBJECT WRAPPER
// example
const n = 3.14534;
const result = n.toFixed(2); // this is wrapper like this in the background javascript --> new Number(n).toFixed(2);
console.log(result);
// example 2
const str = "Hello";
const result1 = str.toUpperCase(); // this is wrapper like this in the background javascript --> new String(str).toUpperCase(2);
console.log(result1);
// after calling the method on wrapper -> wrapper object will be destroyed
 
// construction function = Number , String, Boolean
// only use for internal inquiry. didn't call manually like another programing language like this
// java --> Integer n = new Integer(0) || but in javascript let n = new Number(0);
//  you can use this method but didn't recomended
// example
let x = new Number(0);
if (x) {
    console.log('Hi'); //He was printed even though the value was actually false
}

// becarefull with this think
// type conversion --> Number("5");
// creating an object --> new Number("5");
// example case 1
const tc = Number("5");
console.log(`case 1 ${tc} ` + typeof tc);
const co = new Number("5");
console.log(`case 2 ${co} ` + typeof co)
// make it simple
//  number --> primitive type
//  Number --> objective type

// More
const obj = ''; // this is false
if(obj){
    console.log('run');
}
const obj1 = ' '; // this is thrue because space
if(obj1){
    console.log('run1');
}
const obj2 = {}; // this is thrue because this is object not primitive type
if(obj2){
    console.log('run2');
}
const obj3 = 0; // this is false
if(obj3){
    console.log('run3');
}
const obj4 = 1; // this is false
if(obj4){
    console.log('run4');
}

// more for identify value
const saldo = 1_000_000_000;
console.log(saldo); // this value will 1000000000 --> this is for medium programer to identivy zero count

// how to riverse object to primitive
const num10 = new Number(21);
console.log(num10.valueOf());