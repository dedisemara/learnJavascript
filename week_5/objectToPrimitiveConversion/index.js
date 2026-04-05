//----------------------------Object to Primitive Conversion----------------------------------------------------
// javacript data types can be devided into 2
// primitive type = number,  string, boolean, undifine, null, symbols
// object type = object

// operan only can use primitive data
// if operan use objec --> it will be convert to primitive type

// oprerator using object
// example conversion
const date1 = new Date(2011, 1, 1);
const date2 = new Date(2011, 1, 2);
console.log(date2-date1);

const person1 = {
    name: "Dedi",
    salary: 5000,
};
const person2 = {
    name: "dedi",
    salary: 8000,
};
console.log(person2 - person1);

// type coursion --> though hint --> "number", "string", "default"
// example
// const result = obj1 - obj2 --> hint nya adalah "number"
// const result = obj1 < obj2 --> hint nya adalah "number"
// const result = +obj --> hint nya adalah "number"
// const result = obj + "hello" --> hint nya adalah "default"
// const result = obj1 + obj2 --> hint nya adalah "default"

const date3 = new Date(2012, 1, 1);
console.log(+date3); // hint nya number

// learn symbol.toPrimitive
const person3 = {
    name: "putra",
    salary: 5000,
};
person3[Symbol.toPrimitive] = function(hint){
    if (hint === "number"){
        return this.salary;
    }
    return this.name;
}
console.log(+person3);
console.log('Hello ' + person3);

// question
function Person(name, salary){ //construction function for insert function hint into object --> fyi this function should use capital in the front text
    this.name = name;
    this.salary = salary;
    this[Symbol.toPrimitive] = function(hint){
        return hint === "number" ? this.salary : this.name;
    }
}

const person4 = new Person("Dedi", 8000);
const person5 = new Person("semara", 5000);
console.log(person4 - person5);

// if you don't have property key Symbol.toPrimitive, do this
//  if sting --> obj.toSting(), obj.valueOf()
// if number/default --> obj.valueOf(), obj.toSting()
// example
const person6 = {
    name: "Dedi",
    salary: 7000,
    toString: function(){
        return this.name;
    },
    valueOf: function(){
        return this.salary;
    },
};
console.log(+person6);
console.log("hallo " + person6); //this output is hallo 7000 --> because this fault of javascript

// demo
const person7 = {
    name: "dedi",
    salary: 8000,
    [Symbol.toPrimitive] : function(hint){
        console.log(hint);
    }
};
+person7
person7 + "haha"

const person8 = {
    name: "semara",
    salary: 8000,
    [Symbol.toPrimitive] : function(hint){
        return hint === "number" ? this.salary : this.name;
    }
};
console.log(+person8)
console.log("hello " + person8);

const person9 = {
    name: "dedi",
    salary: 10000,
    [Symbol.toPrimitive] : function(hint){
        return hint === "number" ? this.salary : this.name;
    }
};
console.log("selisih gaji " + (person9 - person8));