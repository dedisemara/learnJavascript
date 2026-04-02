// -------------------------------SYMBOL----------------------------------------
// rule of object -> all key was conferted to be string
const personInformation = {
    firstName: 'dedi',
    age: 20,
    3: 'semara',
};
personInformation[true] = 'hallo'

console.log(personInformation);

const person = {
    firstName: "Putu",
    age: 27,
};

const idSymbol = Symbol();
person[idSymbol] = 'DS0001';
console.log(person);
for (const key in person) {
    console.log(key);
} // you cann't print iteration of object symbol

// how to debuging --> input declarate
const citySymbol = Symbol('city'); // this place declarate
person[citySymbol] = 'Bali';
console.log(person);

// Global symbols
const pet = {
    firstPet: 'fish',
    secondPet: 'Cat',
};
const idSymbolPet = Symbol.for('id');
const anotherIdSymbolPet = Symbol.for('id');
console.log(idSymbolPet === anotherIdSymbolPet);

// When do we use symbols? We use symbols when data requires additional protection.
// example
const getUser = require('./user'); // get data from user.js
console.log(getUser);