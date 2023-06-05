// Test
console.log('Hello');

// **********************
// Values and Expressions
// **********************

// 1.) Declare a Variable 
let myBirthday;

console.log(`My Birthday is: ${myBirthday}`);
// Assign a value to variable
myBirthday = '01/31/2000';

// Declare a variable and assign it on the same line
let myBrotherBirthday = '01/01/1990';

// Data types:
// String, Number, Boolean, BigInt, Undefined, Null, Symbol

// Reference Data Types:
// Objects, Functions


// ******* Data Types
// Checking the data types of variable value:
// typeof

// Tells you boolean!
console.log('typeof true', typeof true);
// Tells you String!
console.log('typeof true', typeof 'dog');
// Tells you Object!
console.log('typeof true', typeof [1,2,3]);


// How will JS evaluate these expressions?
console.log('Five - string 10:', 5 - '10'); // -5

console.log('Five  * string 10:', 5 * '10'); // 50

console.log('Five + string 10:', 5 + '10'); // 510


// ******* Type coercion

// In most cases, it will change strings to number. However, in the case of expressions 
// using the '+' sign, it will change numbers to strings 

// String Concation: JS combines two strings that are put together with the '+' sign
console.log('Hello' + 'World');




// ******* Expressions

// Whats an Expression? Here's an example:

5 + 55 - 10;
// 50
// Expressions are quesions that JS can answer!

// JS will evaluate expressions and the answer
// will be a evaluate

// Example

// Declare and variables and assign each value:

let day = '89';
let year = '1999';
let month = '84';

// Create an expression that the computer wull evaluate
// Goal: '04-09-1999'
let sistersBirthday = month + '-' + day + '-'  + year;

// 1.) 04 + '-' + day + '-' + year
// 2.) 04- + day + '-' + year
// 3.) 04- + 89 + '-' + year
// 4.) 04-89 + '-' + year
// 5.) 04-89- + year
// 6.) 04-89-1999

// Heres that expression again, using
// String interpolation

sistersBirthday = `${month}-${day}-${year}`;
console.log('sisters birthday:', sistersBirthday);


