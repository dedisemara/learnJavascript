// Iterating over an array
// const animals = ['cat', 'dog', 'tiger'];
// for( let i = 0; i < animals.lenght; i++ ){
//     console.log(animals[i]);
// }
// Iterating over object property key
const currencySymbols = {
    usd: "$",
    eur: "#",
    jpy: "Y",
};
for(const currency in currencySymbols){
    console.log(currency);
}
// array is an object
const animals = ['cat', 'dog', 'tiger'];
for(const key in animals){
    const animal = animals[key];
    console.log(`Iteration ${key} result ${animal}`);
}

// using for..in on an array is bad practice
// example the right answer
const prices = [100, 200, 300];
let total = 0;
for(const key in prices){
    total += prices[key];
}
console.log(total)
// example wrong use
const prices1 = [100, 200, 300];
prices1.currency = "USD";
let total1 = 0;
for(const key1 in prices1){
    total1 += prices1[key1];
}
console.log(total1);
// how to fix it
let total2 = 0;
for(let i = 0; i < prices1.length; i++){
    total2 += prices1[i];
}
console.log(total2);


// ---------------------------------Modern Syntax---------------------------
// for....of
const myPet = ['cat', 'fish', 'chicken'];
myPet.currency = "IDR";
for(const pet of myPet){ //currency didn't print because using of
    console.log(pet);
};
// conclution
// used --- for...of --- or normal looping using .lenght

// now using reverse
for(let i = myPet.length - 1 ; i >= 0; i--){
    const pet1 = myPet[i];
    console.log(pet1);
}

// modifying array
// how to modify element in the center
// example
const namePerson = ['putu', 'dedi', 'semara', 'putra'];
// use --> arr.splice(start[, deleteCount, elem1,..., elemN]) --> ENBF Notation
console.log(namePerson);
// this one is to delete index strarting from index 1 and only 1 index deleted
namePerson.splice(1,1);
console.log(namePerson)
// this one is to delete index strarting from index 0 and 2 index deleted
namePerson.splice(0, 2);
console.log(namePerson)
// when you want to change value array do these thing
const nameVilage = ['sidan', 'batur', 'pelaga', 'baturiti'];
console.log(nameVilage);
nameVilage.splice(1, 2, 'tabanan', 'singaraja'); //it mean delete two index starting from index 1 and insert two value starting index 1 || change value
console.log(nameVilage);
// if you only want delete 2 value and insert one new value, do this thing
nameVilage.splice(2, 2, 'selantang')
console.log(nameVilage);
// use splice to push
const newNameVilage = ['jatiluih', 'sandan', 'wanagiri', 'batunya'];
console.log(newNameVilage);
newNameVilage.splice(3, 0, 'petang'); // its mean, start from index 3 don't delete anything input 1 value
console.log(newNameVilage);
newNameVilage.splice(newNameVilage.length, 0, 'taman tanda'); // it's use index length to know value last index on array
console.log(newNameVilage);


// ----------------------SLICE-----------------------
//  arr.slice([start], [end]); --> ENBF Notation
// behavior slice on arry same like behavior slice on string
const arr = ['h', 'e', 'l', 'l', 'o'];
console.log(arr.slice(1, 4));


// ----------------------concatenate-----------------------
const dataClotes1 = ['kebaya', 'kamen', 'udeng'];
const dataClotes2 = ['kemeja', 'jeans'];

const concat = dataClotes1.concat(dataClotes2);
console.log(concat);

// MUTATING AND NON MUTATING

// Concat is Non mutating method
dataClotes1.concat(dataClotes2);
console.log(dataClotes1);
// Push and Pop is mutating method
dataClotes2.push('laging');
console.log(dataClotes2);
dataClotes2.pop();
console.log(dataClotes2);

// unship and ship is mutating method
dataClotes1.unshift('selendang');
console.log(dataClotes1);
dataClotes1.shift();
console.log(dataClotes1);

// splice is mutating method
dataClotes1.splice(2, 1);
console.log(dataClotes1);

// slice is non mutating method
dataClotes2.slice(0, 2);
console.log(dataClotes2);