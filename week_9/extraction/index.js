// question 1
const playerScores = new Map();

playerScores.set('Alex', 1500);
playerScores.set('Blake', 2300);
playerScores.set('Casey', 1850);

for (const player of playerScores.keys()) {
    console.log(player);
}

for (const score of playerScores.values()) {
    console.log(score);
}

for (const entry of playerScores.entries()) {
    console.log(entry);
}

for (const entry of playerScores) {
    console.log(entry);
}

// using keys, values and entry on object
const person = {
    name: 'dedi semara',
    city: 'Bali',
    age: 25,
};

// you can't use
// person.keys()// it will be error
// you need use object construction function's Method
// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)
// example
console.log('you need use object construction function Method')
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


const animal = new Array(); // or you can create --> const animal = [];
const animal1 = new Object(); // or you can create --> const animal1 = {};

// map keys, values, entries return iterable
const person1 = new Map();

person1.set('name', 'Semara Putra');
person1.set('address', 'Bali');
person1.set('age', 28);

console.log(
    Array.isArray(person1.keys())
);
console.log(
    Array.isArray(person1.values())
);
console.log(
    Array.isArray(person1.entries())
);

// object's keys, values, entries return array
const person2 = {
    name: 'dedi semara',
    city: 'Bali',
    age: 25,
};
console.log(
    Array.isArray(Object.keys(person2))
);
console.log(
    Array.isArray(Object.values(person2))
);
console.log(
    Array.isArray(Object.entries(person2))
);

// Destructuring
const strs = ['Edward', 'Anthony'];

const fist = strs[0];
const seccond = strs[1];

// this think is same
const [firstName, lastName] = strs;
console.log(firstName);
console.log(lastName);

// example on input readline sync 
const readlineSycn = require('readline-sync');
const input = readlineSycn.question('Input two number for collom and row: ');
const [col, row] = input.split(' ');
console.log('col value');
console.log(col);
console.log('row value');
console.log(row);

// example on iterable map
const fruitPrices = new Map();
fruitPrices.set('apple', 3999);
fruitPrices.set('banana', 7000);
fruitPrices.set('manggo', 4000);

for (const [fruit, price] of fruitPrices.entries()){
    console.log(fruit);
    console.log(price);
};
// how to convert itrable into array
const fruitArr = Array.from(fruitPrices.keys());
console.log('array fruit from fruitPrices : ' + fruitArr[2]);
const priceArr = Array.from(fruitPrices.values());
console.log('array price from fruitPrices : ' + priceArr[1]);

// object destructuring
const rectangle = {down: 50, up: 100,};
// you can get value with this style
const widht1 = rectangle.down;
const hight1 = rectangle.up;
// if you want make it simple. you should crate const variable same as object keys
// example
const {down, up} = rectangle;
console.log(`widht = ${down} + hight = ${up}`);


// example complexs object
const option = {
    size: {
        width: 5,
        height: 10,
    },
    items: ['Pizza', 'Bread'],
    extra: true,
};

// got all value
const {
    size: {
        width,
        height
    },
    items: [item1, item2],
    title = 'Menu',
    extra
} = option;
console.log(title);
console.log(width);
console.log(height);
console.log(item1);
console.log(item2);
console.log(extra);

// insert function on object
const objFuritPrice = {
    'banana': 9000,
    'apple': 3000,
    'manggo': 4000,
}

const fruitWithDoublePrices = Object.fromEntries(
    Object.entries(objFuritPrice).map(
        ([key, value])=> [key , value * 2]
    )
);
console.log(fruitWithDoublePrices);

// fitur alias on object destruction
const friendData = {
    name: {first: 'Eka', last: 'budi'},
    city: 'bali',
    age: 29,
};

const {
    name: {first: fistName1, last: secondName2},
    city,
    age
} = friendData;

console.log('first name ' + fistName1);
console.log('second name ' + secondName2)

// tips make double value of string
const stringArray = ['1', '2', '3'];
const nums = stringArray.map(n => +n * 2);

console.log(nums)