// 'use strict'; //this thing make javascript strict and didn't allow runtime error like change value property key age into 40 --> line 83

const person = {
    name: 'dedi', // it have internal representation --> Descriptor
    age: 25, // it have internal representation --> Descriptor
    city: 'Bali' // it have internal representation --> Descriptor
};

// Descriptor on property object is
/*
{
    value: ?, // what is value of the properties?
    writeble: ?, // Can property values ​​change?
    enumerable: ?, // can we see the property?
    configurable: ?, // it describe 2 thing --> first, can we deletet the property? && second, can we reconfigurate the properties?
} 
*/

// GET PROPERTY DESCRIPTION
// use this method
// Object.getOwnPropertyDescriptor(obj , name);

console.log(
    Object.getOwnPropertyDescriptor(person, 'city')
);

// SET PROPERTY DESCRIPTION
// Object.defineProperties(obj , propertyName, description);
// this method can define propertys and update properties
// example for "define properties"

const user = {};
Object.defineProperty(user, 'name', {
    value: 'Dedi',
    writable: true,
    enumerable: true,
    configurable: true,
});
// default if you not define description is false, for example
Object.defineProperty(user, 'age', {
    value: 25,
    writable: true,
});
console.log(
    Object.getOwnPropertyDescriptor(user, 'name')
);
console.log(
    Object.getOwnPropertyDescriptor(user, 'age')
);


// UPDATE PROPERTIES
const dataUser = {
    name: 'Semara',
    age: 28,
};
// if all property are writetable, its make all description is true
// now lets update it
Object.defineProperty(dataUser, 'name', {
    writable: false,
});
console.log(dataUser);
console.log(
    Object.getOwnPropertyDescriptor(dataUser, 'name')
);

// demo
const person1 = {
    name: 'eka',
    age: 28,
    city: 'kembang mertha'
}

Object.defineProperty(person1, 'age', {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: true,
});

const deskriptor = Object.getOwnPropertyDescriptors(person1);
console.log(deskriptor);
person1.age = 40;

console.log(person1); // age not to be 40, because writable: false

// WHERE WE USE IT
// When create constants player
// enum pattern
const Player = {
    ONE: 0,
    TWO: 1,
};
Object.defineProperty(Player, 'ONE', {
    writable:false,
});
Object.defineProperty(Player, 'TWO', {
    writable:false,
});
// When create HttpStatusCode
// enum pattern
const HttpStatusCode = {
    200: 'ok',
    201: 'created',
    204: 'empty',
    301: 'redirect',
    404: 'not found',
}

Object.defineProperties(HttpStatusCode, {
    200: {writable: false, configurable: false},
    201: {writable: false, configurable: false},
    404: {writable:false, configurable: false},
});

console.log(
    Object.getOwnPropertyDescriptors(HttpStatusCode)
);

// and if you want to make writable: false, configurable: false on the all of property object then. use freez
Object.freeze(HttpStatusCode);
// after freeze
console.log('after freeze')
console.log(
    Object.getOwnPropertyDescriptors(HttpStatusCode)
);
// add freeze inside object
const person3 = Object.freeze({
    name: 'Putra',
    age: 28,
    city: 'sidan'
});

// now method seal (only configuration is false)

const person4 = Object.seal({
    name: 'I Putu',
    age: 28,
    city: 'Pelage'
});

console.log(
    Object.getOwnPropertyDescriptors(person4)
);

// prevent extension (it can not add properties on object)
// Object.preventExtensions(person4);
person4['weight'] = '25';

console.log(
    Object.getOwnPropertyDescriptors(person4)
);
console.log(person4)