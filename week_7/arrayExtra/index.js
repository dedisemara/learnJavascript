// for (let count = 0; count < 3; count++){
//     console.log('Hellow world');
// };
// console.log('finish')

// Function as parameter
// example
function executeTask(task){
    task();
}
function great(){
    console.log('Hello World!');
}
executeTask(great);
// another example
function executeTask1(task){
    task('jhon');
}
// ----- this is function declaration 
function great1(name){
    console.log('Hello ' + name);
}
// but you can change function declaration to function expression
// example
const decGreat = function(name){
    console.log('Hello ' + name);
}
// to use function declaration 
executeTask1(great1);
// to use function expression
executeTask1(decGreat);

// ------- to make all think simple you can use this one
// because if you create more variable it will be used more memory
executeTask1(function(name){
    console.log('Hello ' + name);
})

// ----------------- NOW WE GONNA LEARN INSIDE OF FOREACH
// The concept is the same as the function above.
const animals = {
    0: 'cat',
    1: 'dog',
    2: 'duck',
    length: 3,
    forEach: function(callbackFn){
        for(let i = 0; i < this.length; i++){ // before we declare object or array in front of (.) --> value 'this' is null
            const element = this[i];
            callbackFn(element, i);
        };
    },
};

animals.forEach(function(animal, index){ // after we declare (.) on foreach then --> this will be the object or array in front of "this"
    console.log(animal);
    console.log(index); // we call 'i' on callbackFn 
    // you can do this think inside function
    if(animal.includes('c')){
        console.log(`Iteration #${index} : ${animal}`);
    }
})

// looping array to make uppercase
const pets = ['fish', 'cat', 'chicken'];

const petsUpperCase = [];
for( let i = 0; i < pets.length; i++){
    const pet = pets[i];
    const petUp = pet.toUpperCase();
    petsUpperCase.push(petUp);
}
petsUpperCase.forEach(function(pet, index){
    console.log(`index ${index}: ${pet}`);
})

// loop inside loop
const books = [
    ['algebra', 'matrix', 'trigonometry'], 
    ['force', 'materials', 'gravity', 'electricity', 'energy'],
];

for(let i = 0; i < books.length; i++){
    for(let n = 0; n < books[i].length; n++){
        console.log(books[i][n]);
    }
}
console.log('end')

// make function join
// this is basic syntax
const mathBooks = [
    'matrix',
    'trigonometry',
    'algebra',
    'peluang',
];
let stringBook = '';
for(let i = 0; i < mathBooks.length; i++){
    const book = mathBooks[i];
    if (i > 0){
        stringBook += ' '
    }
    stringBook += book;
}
console.log(stringBook);

// use function
function join(data1, sparator){
    let joinStr = '';
    for(let i = 0; i < data1.length; i++){
    
        const str = data1[i];
        if(i > 0){
            joinStr += sparator
        }
        joinStr += str;
    }
    return joinStr;
};
const result = join(mathBooks, ' ');
console.log('use function')
console.log(result);
