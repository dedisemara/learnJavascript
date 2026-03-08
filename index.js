// ----------------------------------------OPERATOR----------------------------------------
// unary, binary, ternary
// example binary operator (2 ** 1), (2 + 3), (2 / 1), (let num = 2 + 3)
// 2 * 3 ===> 2 and 3 is Operand ===> * is Operator
// num = num + 1 --equal to-- num +=1 --equal to-- num++
// ++ = increment operator // -- = decrement operator
// Numeric operators ==> (+ is aditional), (- is substraction), (* is multiplication), (/ is Division), (** is Exponential)
// Relational Operator ==> (< is less than), (<= less than or equal to), (> is greater than), (>= greater than or equal to), (== equal to), (!= not equal to)
// how to compare 2 string
// it will false because decimal representation (binary) from falue string
console.log("cat" < "car");
console.log("A" > "a");
// compare number
console.log(8 > 2);
console.log("8" === 8 );

// ------------------------------------Operator Precedence----------------------------------------
// List precedence ==> [(18 = ')(' gruping)], (13 = '**' exponetiation), (12 = '*' and '/'), (11 = + and -), (2 = '=')
let result = 1 + 1 * 3;
console.log(result);
let result1 = (1 + 1) * 3;
console.log(result1);
// Operator with string -> value variable is stirng, example value string 62
let numSting = 2 + 4 + "2"
console.log(numSting + ' ' + typeof numSting);

// ------------------------------------Variable Naming----------------------------------------
// example (camel case = variableNaming), (pascal case = VariableNaming), (snakecase = variable_naming), (kebab case = variable-naming), (flat case = variablenaming) 

let lastName = "Semara"; //camel case
let LastName = "Semara"; //pascal case
let last_name = "Semara"; //snake case
console.log(lastName + " " + LastName + " " + last_name);

// ------------------------------------Constant----------------------------------------
// runtime constant && compile time constant
// runtime constant use const to identify variable
const name = "Dedi"; //runtime constant
// name = "jhon"; // runtime time error
// compile time constant use capital text on sting variable. its for standart value (ex: mount in a year, pi, Eart radius)
const EARTH_RADIUS = 6371;
const GRAVITY = 9.80665;
const PI = 3.14 // compile time constant

const value = 5 * 4;
console.log(value);