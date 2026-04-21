// opening
// if key on object is number --> it will be converted to string
// // example
// const countryCode = {
//     62: "Indonesia",
//     65: "singapore",
// };
// // countryCode will be change to
// const countryCode = {
//     "62": "Indonesia",
//     "65": "singapore",
// }


// now, how we can use another data type as key
// USING MAP. -> another countainer for many variable beside of string and number
// example
const map = new Map();

map.set('name', 'jhon');
map.set('age', 30);
map.set(62, "Indonesia");
map.set(65, "Singpore");
map.set(true, "On");
map.set(false, "Off");

console.log(map)
// if you need to get value of the map using method. and you can't use console.log(map(62))
// use this method
console.log(map.get(65));
// we can check key value
console.log(map.has(65));
// check size map (lenght)
console.log(map.size)

// object
// const user = {
//     name: 'jhon',  // name: 'jhon' --> this is call properties
//     age: 30,
// }
// Map
// const map = new Map();
// map.set('name', 'jhon'); // map.set('name', 'jhon') --> this is call entry

const user1 = {name: 'dedi'};
const user2 = {name: 'semara'};

const visitCount = new Map();
visitCount.set(user1, 2);
visitCount.set(user2, 4);
console.log('count visitor 1')
console.log(visitCount.get(user1)); // get visit user 1 --> 2
console.log('count visitor 2')
console.log(visitCount.get(user2)) // get visit user 2 --> 4

console.log(typeof visitCount)

// we gonna delete visit count user1 && not changging all size (lenght) === with previous build
visitCount.delete(user1);
console.log(`count visitor 1 after deleted visitor 1 ${visitCount.get(user1)}`)
console.log(`count visitor 2 after deleted visitor 1 --> ${visitCount.get(user2)}`)

// clear all visitor account && changging all size (lenght) === 0 
visitCount.clear();
console.log(`count visitor 1 after clear all ${visitCount.get(user1)}`)
console.log(`count visitor 2 after clear all ${visitCount.get(user2)}`)

// how to write variable map
// example
// const fruitPrices ---> key === fruit === singular && value === Prices === plural (should add 's'/'es')

const fruitPrices = new Map();
fruitPrices.set('apple', 5);
fruitPrices.set('banana', 8);
fruitPrices.set('orange', 5);
// we can get list key from the map using .key method
const fruits = fruitPrices.keys();
console.log(fruits)

// you can use iterable to print one by one key
for (const fruit of fruits) {
    console.log(fruit);
}

// you can use iterable to print value of the map one by one
for (const price of fruitPrices.values()) {
    console.log(price);
}

// you can use iterable to print entry of the map oen by one
for (const data of fruitPrices.entries()){
    console.log(data);
    const fruit = data[0];
    const value = data[1];
    console.log(fruit);
    console.log(value);
}

// because map is iterable, you didn't should using method .entries()
// modern way
// example
for (const entry of fruitPrices){
    console.log(entry);
    const fruit = entry[0];
    const value = entry[1];
    console.log(fruit);
    console.log(value);
}

// check map is array or not
console.log('check data fruitPrices:');
console.log(Array.isArray(fruitPrices));

// but if is array it will be true
const foods = ['Nasi goreng', 'Ayam goreng', 'Lele bakar'];
console.log('check data foods:');
console.log(Array.isArray(foods));

// example case map adding function
function deleteUser() {

}

function createUser() {

}

const funcRole = new Map();
funcRole.set(deleteUser, 'admin');
funcRole.set(createUser, 'member');

// map can not shorting data like object
// object only can shorting by integer
const countryCode = {
   "62": "Indonesia",
    "1": "United State",
};

// loop the country code and it automate shorting and type conversion
for (const code in countryCode) {
    console.log(code); //it will be change the possition
};

const mapCountryCode = new Map();
mapCountryCode.set(62, 'Indonesia');
mapCountryCode.set(1, 'United States');
// example add function on Map
mapCountryCode.greetings = function() {
    console.log('hey brohh');
}
mapCountryCode.set(20, ()=> {console.log('hidup santai')});

for (const code of mapCountryCode) {
    console.log(code);
}
// call the function
mapCountryCode.greetings();
// call the function
mapCountryCode.get(20)();