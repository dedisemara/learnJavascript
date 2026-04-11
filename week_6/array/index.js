// -------------------------------------------------------ARRAY--------------------------------------
// basic of array is object but all array is not object variable
const animals = {
    0: 'cat',
    1: 'dog',
    2: 'tiger',
    3: 'horse',
    length: 4,
    push: function(value){
        this[this.length] = value;
        this.length++;
    }, // this is function for input value for object
    pop: function(){
        delete this[this.length - 1]
        this.length--;
    }

};
// remember all of property key for object value is string ('') not a number. but if we use number --> it will be convert by system to be string
// let's make a example
console.log(animals[2]);
console.log(animals['2']);
console.log('animals count: ' + animals.length);
// get all property values of animals
for(let i=0; i < animals.length; i++){
    const animal = animals[i];
    console.log(animal);
};

// we want to delete one key and value of the animals object
animals.pop();
console.log('delete one value object --> delete value is horse')
// and then we looping print animals value
for(let i=0; i < animals.length; i++){
    const animal = animals[i];
    console.log(animal);
};

// and then we want to input value on animals object
animals.push('duck')
console.log('manual input to animals object --> value is duck')
// and then we looping print animals value
for(let i=0; i < animals.length; i++){
    const animal = animals[i];
    console.log(animal);
};

// now we make a constructure function for object/array
// this is will be same with function inside the animals object 
function arr() {
    this.length = 0;
    this.push = function(value){
        this[this.length] = value;
        this.length++;
    };
    this.pop = function(){
        delete this[this.length - 1];
        this.length--;
    };
};

// okey let's input value
const readlineSync = require('readline-sync');
const fruits = new arr(); // declare array or object

// input value with readline Sync
// for(let n = 1; n < 3; n++){
//     let valueFruit = readlineSync.question(`Input fruit name ${n} : `);
//     fruits.push(valueFruit);
// }
// console.log(fruits);

const name = new arr();
name.push('dedi');
name.push('semara');
name.push('putra');
console.log(name);



// All of code in the top of this index is manualy create by me
// but in JavaScript we can creat Array using local JavaScript function. So it's mean we didn't create functioan, we just use it
// this example
const dataBaju = new Array();
dataBaju.push('Kemeja');
dataBaju.push('Celana Jeans');
dataBaju.push('Kamen');
console.log(dataBaju);
for(let i=0; i < dataBaju.length; i++){
    const data = dataBaju[i];
    console.log(data);
};
console.log('banyak data baju : ' + dataBaju.length);

// how to create new Array() as simple as posible
// const x = new Array() || const x = []
// ratther than you write name.push one by one you can write like this --> const x = ['dedi', 'semara']
// Visualisasi
// const animals = ['cat', 'dog', 'tiger'] --> cat(0), dog(1), tiger(2)
// animals.push('duck') --> cat(0), dog(1), tiger(2), duck(3)
// animals.pop() --> cat(0), dog(1), tiger(2)
// animals.unshift('bird') --> bird(0), cat(1), dog(2), tiger(3)
// animals.shift() --> cat(0), dog(1), tiger(2)
// shift and unshift are expensive --> time complexity is --> O(n)
// if you use push --> you didn't need more time to convert all index --> O(1)
// if you use pop --> you didn't need more time to convert all index --> O(1)

//-------------------------------------------LENGHT----------------------------------------
const pets = ['Kucing', 'ikan', 'tikus'];
console.log('Jumlah peliharaan : ' + pets.length);
pets.push('cacing');
console.log('Jumlah peliharaan setelah di check : ' + pets.length);
pets.length = 2;
console.log(pets);

//--------------------------------------------Multidimensional Array------------------------
// example
const book = ['math', 'physics']; // same like 0: 'math', 1: 'physics'
// but if wee hava multidimentional array, how to devine property key?
const books = [['algerbra', 'geometric', 'calculus'], ['mechanic', 'optic', 'energy']];
console.log(books[1][0]); // result is mechanic
console.log(books);
console.table(books);