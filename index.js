// ----------------------------------------OBJECT----------------------------------------
// example
const person = {
    name: 'Dedi',
    age: '12',
    addres: 'Bali',
    gender: 'Male',
};
console.log(person.name); // simple way to get data object (obj.key)
console.log(person['name']); // this is the main process and the same value output

// how to change property/key value on data object
person.name = 'Semara Ganteng';
console.log('After change object key: ' + person.name);
console.log(`Hallo nama saya ${person.name} umur saya ${person.age} tinggal di ${person.addres}`);

// but why in const varibale we can change value?
// this not change value const but we change object value inside variable
// false example
// person = 'dedi'; // show compile time error

// know we want to create a data object with space ( ) on initial
const person2 = {
    'first name': 'Dedi',
    'last name': 'Semara',
    age: 12, 
};
console.log(person2['first name']); // we can call this property with basic process, but in real case we will rarely find the use of this code

// this is the correct spelling used cammel case
const person3 = {
    firstName: 'Dedi',
    lastName: 'Semara',
    age: 12,
};

// we also can add property values on previes property
const person4 = {
    name: {
        first: 'Bracuk',
        middle: 'putu',
        last: 'Putra',
    },
    weight: 20
};
console.log('print property on value property: ' + person4.name.first);
console.log('with another way: ' + person4['name']['first']);

// check data type of object
const rectangle = {
    witdth: 5,
    height: 3,
};
console.log('check type of value: ' + typeof rectangle);

// computed property name
const categori = "Food";

const expense = {
    [categori] : 5000
};
console.log(expense);
console.log(expense[categori]); // it will print value of properties

// example for using loop to print all key value
const payment = {
    "security-1": 1200000,
    "security-2": 2300000,
    "security-3": 3500000, 
};

for(let i = 1; i <= 3; i++){
    const value = payment[`security-${i}`];
    console.log(value);
}

// trailing comma
// this is for clean reading at git diff
// example to writing object like propesional programer
const sumByGender = {
    male: 2000,
    female: 3400, //you should use comma at the end of object key
};
