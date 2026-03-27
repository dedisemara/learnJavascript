// -------------------------------MORE ABOUT OBJECT #3----------------------------------------
// example 1
const rectangle = {
    width: 5,
};
rectangle.height = 3;
console.log(rectangle);

// object with function it call method
// example 2
const person = {
    name: "dedi",
    age: 27,
};
function sayHello() {
    console.log("Hello!");
}
person.sayHello = sayHello;
person.sayHello();
console.log(person);

// you can also use function expression
// make it simple without declare function first
// example 3
const person1 = {
    name: "semara",
    age: 27,
};
person1.sayHello= function() {
    console.log("Hello!");
};
person1.sayHello();

// example 3 properties with 2 method
const person2 = { name: "dedi" };
person2.sayHello = function() {
    console.log("Hello!");
};
person2.jump = function() {
    console.log("Jump");
};
console.log(person2);

// ownership in javascript
const rectangle1 = {
    width: 10,
    height: 20,
};
function getRectangleArea(r) {
    return r.width * r.height;
};
console.log(getRectangleArea(rectangle1));
// but you can use this
rectangle1.getArea = function() {
    return this.width * this.height;
};
console.log(rectangle1.getArea());

// but we can input function in object
const rectangle2 = {
    width: 20,
    height: 20,
    getArea: function(){
        return this.width * this.height;
    },
};
console.log(rectangle2.getArea());

// combine all
const circle = {
    radius: 100
};
circle.phi = 3.14;
circle.getArea = function(){
    return this.radius * this.phi;
};
console.log(circle.getArea());

// arrow function doesn't have "this"
circle.getArea1 = () => {
    return this.radius * this.phi; // "this" will be undifined
};
console.log(circle.getArea1());

// constructor function
// const rectangle3 = {
//     width: 5,
//     height: 34,
//     getArea: function(){
//         return this.width * this.height;
//     },
// };
// const rectangle4 = {
//     width: 12,
//     height: 20,
//     getArea: function(){
//         return this.width * this.height;
//     },
// };
// const rectangle5 = {
//     width: 2,
//     height: 30,
//     getArea: function(){
//         return this.width * this.height;
//     },
// };
// we can simplyfy this code by construcor function
function Rectangle( width, height ) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    };
};
const rectangle3 = new Rectangle(5, 34);
const rectangle4 = new Rectangle(12, 20);
const rectangle5 = new Rectangle(2, 30);

console.log(rectangle3.getArea());
console.log(rectangle4.getArea());
console.log(rectangle5.getArea());

// fix contributor. couse i use new device