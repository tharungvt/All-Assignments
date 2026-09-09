// ==========================================
// TASK 5 - JAVASCRIPT QUESTIONS & ANSWERS
// ==========================================


// 📌 VARIABLES & DATA TYPES
// Questions 1 - 8


// Q1: Difference between var, let and const

// var can be re-declared and re-assigned
// let cannot be re-declared but can be re-assigned
// const cannot be re-declared or re-assigned


// Q2: Can we re-declare variables?

var number1 = 10;
var number1 = 20;

let number2 = 10;
// let number2 = 20; // Error

const number3 = 10;
// const number3 = 20; // Error


// Q3: What is the output?

var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;

// z = 30; // Error because const cannot be changed

console.log(x, y, z);


// Q4: Declaration and Initialization

// Declaration means creating a variable
let age;

// Initialization means giving a value to the variable
age = 25;

console.log(age);


// Q5: What will be the output?

let a;

console.log(a);
// Output: undefined


// Q6: Hoisting

// JavaScript moves the declaration to the top
// when using var.

console.log(myNumber);
var myNumber = 100;


// Q7: Difference between null and undefined

let value1;
let value2 = null;

console.log(value1);
console.log(value2);


// Q8: typeof

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});


// ==========================================
// 📌 OPERATORS
// Questions 9 - 14
// ==========================================


// Q9: Difference between == and ===

console.log(5 == "5");   // true
console.log(5 === "5");  // false


// Q10: Difference between ++i and i++

let i = 5;

console.log(++i); // 6

let j = 5;

console.log(j++); // 5
console.log(j);   // 6


// Q11: What will be the output?

let x1 = 10;
let y1 = "5";

console.log(x1 + y1); // 105
console.log(x1 - y1); // 5
console.log(x1 * y1); // 50
console.log(x1 / y1); // 2


// Q12: Logical operators

// AND - &&

console.log(5 > 3 && 10 > 5);

// OR - ||

console.log(5 > 10 || 10 > 5);

// NOT - !

console.log(!(5 > 3));


// Q13: What will be the output?

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));


// Q14: Ternary operator

let studentAge = 20;

let ageResult = studentAge >= 18 ? "Adult" : "Minor";

console.log(ageResult);


// ==========================================
// 📌 TYPE CASTING
// Questions 15 - 17
// ==========================================


// Q15: Implicit and Explicit type casting

// Implicit casting happens automatically
let result1 = "10" - 5;

console.log(result1);


// Explicit casting is done manually
let result2 = Number("10");

console.log(result2);


// Q16: What will be the output?

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));


// Q17: NaN

// NaN means Not a Number

let result3 = Number("hello");

console.log(result3);


// ==========================================
// 📌 CONDITIONAL STATEMENTS
// Questions 18 - 21
// ==========================================


// Q18: if-else and switch

// if-else is useful for checking conditions
// switch is useful for checking multiple fixed values


// Q19: What will be the output?

let studentAge2 = 20;

if (studentAge2 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Q20: Nested if

let age2 = 20;
let hasId = true;

if (age2 >= 18) {

    if (hasId) {
        console.log("Entry allowed");
    }

}


// Q21: Even or Odd using ternary

let number = 10;

let evenOdd = number % 2 === 0 ? "Even" : "Odd";

console.log(evenOdd);


// ==========================================
// 📌 LOOPS
// Questions 22 - 25
// ==========================================


// Q22: while and do-while

// while checks the condition first

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}


// do-while runs once before checking the condition

let count2 = 1;

do {
    console.log(count2);
    count2++;
} while (count2 <= 5);


// Q23: What will be the output?

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// Q24: for-of and for-in

// for-of gives values

let fruits = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}


// for-in gives index or keys

for (let index in fruits) {
    console.log(index);
}


// Q25: Sum of numbers from 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Sum from 1 to 100:", sum);


// ==========================================
// 📌 ARRAYS
// Questions 26 - 27
// ==========================================


// Q26: slice and splice

let array1 = [1, 2, 3, 4];

let slicedArray = array1.slice(1, 3);

console.log(slicedArray);


// splice changes the original array

let array2 = [1, 2, 3, 4];

array2.splice(1, 2);

console.log(array2);


// Q27: What will be the output?

let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);


// ==========================================
// 📌 FUNCTIONS
// Questions 28 - 30
// ==========================================


// Q28: Function declaration

function welcome() {
    console.log("Welcome");
}

welcome();


// Function expression

let greetUser = function() {
    console.log("Hello");
};

greetUser();


// Q29: Arrow function

let add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// Q30: What will be the output?

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);


// ==========================================
// END OF TASK 5
// ==========================================

console.log("Task 5 completed successfully!");