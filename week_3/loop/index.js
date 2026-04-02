// ----------------------------------------LOOP----------------------------------------
// while loop
let count = 0;
while (count < 3) {
    console.log('Hello World!');
    count = count + 1;
};

let number = 0;
while (number <2) {
    console.log('Om swastyastu');
    number += 1;
};

let value = 1;
while (value < 4) {
    console.log('Hii');
    value++;
};

// do while loop
let doNumber = 0;
do{
    console.log('semara');
    doNumber++;
}while (doNumber < 3);

// for loop
for (let forNumber = 0; forNumber < 3; forNumber++) {
    console.log(forNumber);
}
console.log('End');
// combination with contional value
for (let forConditional = 0; forConditional < 10; forConditional++) {
    if(forConditional % 2 === 0) {
        console.log("Angka " + forConditional + " adalah bilangan genap");
    }else {
        console.log("Angka " + forConditional + " adalah bilangan ganjil");
    }
}
console.log('End 2');