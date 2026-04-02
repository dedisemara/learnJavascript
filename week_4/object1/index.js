// ----------------------------------------MORE ABOUT OBJECT----------------------------------------
// example
const age = 25;
const person = {
    name: 'Dedi',
    age: age,
};
console.log(person);

// or you can create like this
// this is call property shorthand
const age1 = 40;
const person1 = {
    name1: 'Semara',
    age1, // --> age1: age1,
};
console.log(person1);

// Check whether a property exist
console.log(person.name !== undefined); // this one is exist and value is true
console.log(person.address !== undefined); // this on is not exist and value is false
// this approach as weekness
const menu = {
    sate: undefined,
};
console.log(menu.sate !== undefined);
// this way to check properly
// in operator
// syntax  -->  key in obj --> but key value should be string
console.log('name' in person);
console.log('address' in person);
console.log('sate' in menu);

// there is no numeric key in javascript
const countryCodes = {
    1: 'United States', //--> will converted like this '1': 'United States'
    62: 'Indonesia',// --> '62': 'Indonesia'
    86: 'China', // --> '86': 'China'
};
for (const key in countryCodes) {
    const value = countryCodes[key];
    console.group(value);
}

// deep dive into ECMAScript
// this is standart for all compiler to us

// for in loop
// rule 1.  integer properties are shorted
// role 2.  others appears the same like it's define
const currencySymbols = {
    usd: '$',
    eur: '€',
    jpn: '¥',
};
for (const code in countryCodes) {
    console.log(code);
}