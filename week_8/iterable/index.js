// iterable
// // wrong syntax
// const range = {
//     from: 1,
//     to: 3,
// };
// // example of --> range is not iterable
// for (const num of range){
//     console.log(num);
// };

// and then why array can be iterable
// because it have special properties (iterator property)
// we hide properties with symbols

const animals = ['harimau', 'kodok', 'cacing'];
for (const animal of animals){ //animal is production result and animals is factory product / production engine (iterable)
    const data = animal
    console.log(data)
}
// and in the background it will look like this
// const iterator = animals[Symbol.iterator](); // value of Symbol.iterator is function and iterator is object who have 'next' properties
// const animal = iterator.next().value; // first iterator
// const animal = iterator.next().value; // second iterator
// const animal = iterator.next().value; // third iterator

// now we will create object with iteraor properties
const range = {
    from: 1,
    to: 3,
    [Symbol.iterator]: function(){
        let current = this.from;
        const last = this.to;
        return {
            next: function() {
                if (current <= last){
                    const ret = { done: false, value: current};
                    current++;
                    return ret;
                } else{
                    return {done: true, value: undefined};
                }

            },
        };
    },
};

for (const num of range){
    console.log(num);
};

// or doing this think
const iterator = range[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

// create manualy array
function Arr() {
    this.lenght = 0;

    this.push = function(el) {
        this[this.lenght] = el;
        this.lenght++;
    };
    this.pop = function() {
        delete this[this.lenght - 1];
        this.lenght--;
    };

    // this is the iteration function
    this[Symbol.iterator] = function() {
        let curr = 0;

        return {
            next: () => {
                return curr <= this.lenght - 1 
                    ? {value: this[curr++], done: false}
                    : {done: true};

            }
        }
    }
};

const dataDagangan = new Arr();
dataDagangan.push('Celana');
dataDagangan.push('Baju');
dataDagangan.push('Kamen');

for ( let i = 0; i < dataDagangan.lenght; i++){
    const data = dataDagangan[i];
    console.log(data);
}
// but you can't use for of before you add Symbol iterator on the function Arr()
for (const data of dataDagangan) {
    console.log(data);
}




