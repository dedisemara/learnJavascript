// extraa learning

// syntax ES 2009 description
const fruit = ['banana', 'pear', 'manggo', 'water mellon', 'orange'];
fruit.forEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++){
        const element = this[i];
        callbackFn(element, i, this);
    }
};

const callback = function(fruit, index) {
    console.log(`value ${fruit} and index ${index}`);
    console.log(index);
};
fruit.forEach(callback);

// This is 3 syntax for looping array in javascript
// First: Original 1995
// for ( let i = 0; i < arr.lenght; i++){
    // console.log(arr[i])
// }

// second: ES5 2009 --> NOT RECOMENDED BECAUSE SLOW PERFORMANCE, DOES NOT SUPPORT BREAK AND CONTINUE
// arr.forEach(function(arr, index){
    // console.log(arr)
// });

// Third: ES6 2015
// for(const data of arr){
    // console.log(data)
// }

// NOTE please use Original 1995 and ES 2015

// --------------Finding an element in an array---------------------------
// example on string
const str = 'JavaScript is fun';
// example on array
console.log(str.indexOf('is'));
const fruit1 = ['banana', 'pear', 'manggo', 'water mellon', 'orang', 'banana'];
console.log(fruit1.indexOf('banana'));
// inside the method indexOf
fruit1.indexOf = function(el){
    for (let i = 0; i < fruit1.length; i++){
        const fruit = fruit1[i];
        if (fruit === el){
            return i;
        }
    }
    return -1;
};

// when we use indexOf but array fruit doesn't have value we search it will show -1
console.log(fruit1.indexOf('jambu'));
// if you want search value from last value array, use these think
console.log('last index banana : ' + fruit1.lastIndexOf('banana'));

// then you sould use include method to return value as boolean
if (fruit1.includes('banana')){
    console.log('The array contain banana');
}else {
    console.log('The array does not have value banana');
}

// found index using findIndex
const products = [
    {id: 101, name: 'Pencil'},
    {id: 102, name: 'Notebook'},
    {id: 103, name: 'Eraser'},
];
// find value
const findValue = products.find(function(value){
    return value.id === 102;
});
console.log(findValue);
// behine the scane of find is this function
products.find = function(callbackFn){
    for( let i =0; i < products.length; i++) {
        const product = this[i];
        if(callbackFn(product)){
            return product;
        }
    }
};


// find index
const index = products.findIndex(function(product){
    return product.id === 103;
}); 
// behine the scane of findIndex is this function
products.findIndex = function(callbackFn){
    for( let i =0; i < products.length; i++) {
        const product = this[i];
        if(callbackFn(product)){
            return i;
        }
    }
};

const foundProduct = products[index];
console.log(foundProduct);
console.log(index);
console.log(foundProduct.name);
// if you need value not index, then use this thing
const value = products.find(function(product){
    return product.id === 103;
});
console.log(value);

// ------FILTERING AN ARRAY-----------
const buah = [
    {name: 'Apple', sweet: true},
    {name:'Lemon', sweet: false},
    {name:'Manggo', sweet: true},
];
const sweetBuah = buah.filter(function(ambil){
    return ambil.sweet == true;
});
console.log(sweetBuah);

// ------MAPPING AN ARRAY-----------
const names = ['anna', 'steven', 'diana'];
const nameUpperCase = names.map(function(pilih){
    return pilih.toUpperCase();
})
console.log(nameUpperCase);

// inside of mapping an array
const simulateUpperCase = [];
for(let i = 0; i < names.length; i++){
    const name = names[i];
    const convertUpperCase = name.toUpperCase();
    simulateUpperCase.push(convertUpperCase);
};
console.log(simulateUpperCase);