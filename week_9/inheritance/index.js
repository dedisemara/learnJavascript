// example
const person = {
    name: 'Dedi'
};
console.log(person.toString()); // --> this method call by inherit by [[Prototype]]


function Circle(radius){
    this.radius = radius;
};

Circle.prototype.getArea = function() {
    return 3.14 * this.radius ** 2;
};

const circle = new Circle(5);

console.log(circle.getArea());

// which one is more efficient
// // function 1
// function Circle(radius){
//     this.radius = radius;

//     this.getArea = function() {
//         return 3.14 * this.radius ** 2;
//     };
// };
// // function two
// function Circle(radius){
//     this.radius = radius;
// };
// Circle.prototype.getArea = function() {
//     return 3.14 * this.radius ** 2;
// };

// THE ANSWER IS FUNCTION 2
// WHY: because if you use function 1, you will create object with value (result and function too);

// another example
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};
Rectangle.prototype.getPerimeter = function() {
    return (this.width * 2) + (this.height * 2);
};
const rectangle = new Rectangle(10, 6);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());

const rectangle1 = new Rectangle(4, 7);
const rectangle2 = new Rectangle(11, 50);

console.log(rectangle1.getArea === rectangle2.getArea); //result is true

// if we use previews way. only inside function inside function. it will create more object function
function RectangleTest(width, height) {
    this.width = width;
    this.height = height;

    this.getArea = function() {
        return this.width * this.height;
    };
}
const rectangleTest1 = new RectangleTest(43, 56)
const rectangleTest2 = new RectangleTest(20, 100)
console.log(rectangleTest1);
console.log(rectangleTest1.getArea === rectangleTest2.getArea); //result is false

// at 1995 no way to change the [[Prototype]] after object created
// function Circle(radius) {
//     this.radius = radius;
// };

// const circle = new Circle(4); // we created Circle.prototype

// circle.[[Prototype]] = value // we can't access prototype and we can't change it
// 1995 until 1998 programmer still want to access prototype after it created but
// founder didn't allow programmer to do it. The reason is performa
// but in 1998 programmer and founder javascript find the smart way
// prototype can accest with __proto__ property
// example
// function Circle(radius) {
//     this.radius = radius;
// };
// const circle = new Circle(4); 
// circle.__proto__ = obj ; // but now circle10 inherit to obj not to Circle10.prototype

// example
const shape = {
    move: function(){
        console.log('I am Move');

    },
};

const persegi = {
    width: 100,
    height: 30,
};

persegi.__proto__ = shape;

persegi.move();
console.log(persegi);

// another example
const animal = {
    jump: function() {
        console.log('I am jumping');
    },
};

const tiger = {
    __proto__: animal,
}
const cat = {
    __proto__: animal,
}
tiger.jump();
cat.jump();

// GENTRLEMAN AGREEMENT
// _name --> level 1 private property
// __name --> level 2 library private
//  __name__ --> level 3 system private


// BIRTH CERTIFICATE
// circle.getArea();
// rectangle.getPerimeter();
// do not delete Birth Certificate
// example detail
function Circle11(radius) {
    this.radius = radius;
};
console.log(Circle11.prototype); // this function is enurable === false
console.log(
    Object.getOwnPropertyDescriptors(Circle11.prototype)
);

console.log(Circle11.prototype.constructor === Circle11); // its true
// because of that, we can create this think
const testCircle = new Circle11.prototype.constructor(10);
console.log(testCircle);

const anotherCircle = new testCircle.constructor(4);
console.log(anotherCircle);

// we can check birth certificate using this think
if (testCircle.constructor === Circle11) {
    console.log('This think birth from function Circle11');
}

// or you can use this thing, to check birth certificate
if (testCircle instanceof Circle11) {
    console.log('This think birth from function Circle11');
}

// another example
const strings = ['h', 'e', 'l', 'l', 'o'];
const result = strings.map(t => t.toUpperCase()); // toUpperCase came from String.prototype
console.log(result);
// lets check toUpperCase came from
console.log('abc'.toUpperCase === String.prototype.toUpperCase); // it will be true
