// using case iterable
function Range(from, to) {
    this.from = from;
    this.to = to;

    this[Symbol.iterator] = function() {
        let curr = this.from;

        return {
            next: () => {
                return curr <= this.to
                    ? {done: false, value: curr++}
                    : {done: true};
            }
        }
    }
}

const firstRange = new Range(2, 8);
const secondRange = new Range(4, 10);

for (const num of firstRange){
    console.log(num);
}

for (const num of secondRange){
    console.log(num);
}


// using case interval date
// function interval(start, end) {

// }

// const interval = new interval(
//     new Date(1, 1, 2020),
//     new Date(1, 1, 2026)
// )