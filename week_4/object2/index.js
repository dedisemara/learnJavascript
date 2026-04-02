// -------------------------------MORE ABOUT OBJECT #2----------------------------------------
// example 1
let price = 100;
let copyprice = price;
copyprice = 200;
console.log(copyprice); // value 200
console.log(price); // value 100

// example 2
let rectangle = { width: 5, height: 3, };
let copyrectangle = rectangle;
copyrectangle.width = 15;
console.log(copyrectangle.width); // value {width: 15}
console.log(rectangle.width); // value {width: 15}

// object copy by reference but if not object will copy by value

// now lets doing the right copy
let rectangle1 = { width: 5, height: 3, };
let copyrectangle1 = {
    width: rectangle1.width,
    height: rectangle1.height
}
copyrectangle1.width = 15;
console.log('Right value copy by reference: ')
console.log(copyrectangle1.width); // value 15
console.log(rectangle1.width); // value 5

// or use object assign to sparate referenece
let rectangle2 = { width: 5, height: 3, };
let copyrectangle2 = Object.assign({}, rectangle2);
copyrectangle2.width = 15;
console.log('Right value copy by reference use assign: ')
console.log(copyrectangle2.width); // value 15
console.log(rectangle2.width); // value 5   

// -------------------------------ternary operator----------------------------------------
const temperature = 38;

const result = temperature >= 37 ? 'sick' : 'healthy';
console.log(result); // value is 'sick'

// this code call ninja code. NOT RECOMENDED FOR PROFESSIONAL PROGRAMMERS
// example
const age = 1; 
// <= 5 == 'balita'
// 5 - 17 == 'anak-anak'
// 18 == 'dewasa'
const result1 = age < 18 ? age < 5 ? 'balita' : 'anak-anak' : 'dewasa';
console.log(result1); // value is 'balita'

// you should select this method for professional
let category;
if (age <  5){
    category = 'balita';
} else if (age < 18){
    category = 'anak-anak';
} else {
    category = 'dewasa';
}

console.log(category); // value is 'dewasa'

