// ============================================================
// Task 1 : Variables
// ============================================================

var Name = "Tharun G";
let Age = 25;
let City = "Chennai";
const College = "MGR University";

console.log(Name);
console.log(Age);
console.log(City);
console.log(College);

// Change the var value
Name = "Tharun G";
console.log(Name);

// Change the let value
Age = 26;
console.log(Age);

// const value cannot be changed
// College = "SVPP";
// console.log(College);
// Error: Assignment to constant variable.

// Redeclaring var variable
var Name = "Tharun G";
console.log(Name);

// let and const cannot be redeclared in the same scope
// let Age = 32;
// console.log(Age);

// Error: Identifier 'Age' has already been declared.

// const College = "NIST";
// console.log(College);

// Error: Identifier 'College' has already been declared.


// ============================================================
// Task 2 : Printing Statements
// ============================================================

let name = "Tharun G";

console.log(name);

var ask = alert("Welcome Tharun G!");
console.log(ask);

let login = confirm("Do you want to login your account?");
console.log(login);

var password1 = prompt("Enter your Email Id for login");
console.log(password1);

let final = "Congratulations! You are successfully logged into your account";
document.writeln(final);


// ============================================================
// Task 3 : User Details
// ============================================================

let userName = prompt("Enter your Name :");
let userAge = prompt("Enter your Age :");
let userCity = prompt("Enter your City :");
let userQualification = prompt("Enter your Qualification :");

console.log("Name : " + userName);
console.log("Age : " + userAge);
console.log("City : " + userCity);
console.log("Qualification : " + userQualification);


// ============================================================
// Task 4 : Data Type Tasks - Find Data Type
// ============================================================

var name1 = "JavaScript";
let num = 100;
let num2 = 99.5;
var boo = true;
var boo1 = false;
let text = undefined;
let text2 = null;

console.log(name1);
console.log(num);
console.log(num2);
console.log(boo);
console.log(boo1);
console.log(text);
console.log(text2);

console.log(typeof name1);
console.log(typeof num);
console.log(typeof num2);
console.log(typeof boo);
console.log(typeof boo1);
console.log(typeof text);
console.log(typeof text2);


// ============================================================
// Task 5 : Student Array
// ============================================================

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log(students[0]);
console.log(students[1]);
console.log(students[students.length - 1]);
console.log(students.length);


// ============================================================
// Task 6 : Employee Object
// ============================================================

let employee = {
    Name: "Ani",
    Age: 23,
    Role: "Frontend Developer",
    Skills: ["HTML", "CSS", "JS", "Node.js"],
    isWorking: true,
    Qualification: ["10th", "Diploma", "B.Tech"]
};

console.log(employee.Name);
console.log(employee.Age);
console.log(employee.Role);
console.log(employee.Skills[0]);
console.log(employee.Qualification[employee.Qualification.length - 1]);
console.log(employee.isWorking);


// ============================================================
// Task 7 : Calculator - Arithmetic Operators
// ============================================================

let a = 20;
let b = 5;

// Addition
console.log(a + b);

// Subtraction
console.log(a - b);

// Multiplication
console.log(a * b);

// Division
console.log(a / b);

// Modulus
console.log(a % b);

// Exponential
console.log(a ** b);


// ============================================================
// Task 8 : Shopping Bill
// ============================================================

let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let Bag = 799;

let totalPrice = Shirt + Pant + Shoes + Bag;

console.log(totalPrice);


// ============================================================
// Task 9 : Increment & Decrement
// ============================================================

// A - Post Increment

let A = 10;
let B = A++;

console.log(A); // 11
console.log(B); // 10


// B - Pre Increment

let C = 10;
let D = ++C;

console.log(C); // 11
console.log(D); // 11


// C - Post Decrement

let E = 10;
let F = E--;

console.log(E); // 9
console.log(F); // 10


// D - Pre Decrement

let G = 10;
let H = --G;

console.log(G); // 9
console.log(H); // 9


// ============================================================
// Task 10 : Assignment Operators
// ============================================================

// Addition

let Num = 10;
Num += 5;
console.log(Num); // 15


// Subtraction

let Num1 = 10;
Num1 -= 3;
console.log(Num1); // 7


// Multiplication

let Num2 = 10;
Num2 *= 2;
console.log(Num2); // 20


// Division

let Num3 = 10;
Num3 /= 4;
console.log(Num3); // 2.5


// Modulus

let Num4 = 10;
Num4 %= 3;
console.log(Num4); // 1


// Exponential

let Num5 = 10;
Num5 **= 2;
console.log(Num5); // 100


// ============================================================
// Task 11 : Comparison Operators
// ============================================================

console.log(10 > 5);       // true
console.log(10 < 5);       // false
console.log(10 >= 10);     // true
console.log(10 <= 9);      // false

console.log(5 == "5");     // true
console.log(5 === "5");    // false

console.log(10 != "10");   // false
console.log(10 !== "10");  // true


// ============================================================
// Task 12 : Logical AND Operator
// ============================================================

console.log(true && true);     // true
console.log(true && false);    // false
console.log(false && true);    // false
console.log(false && false);   // false


// ============================================================
// Task 13 : Logical OR Operator
// ============================================================

console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || true);     // true
console.log(false || false);    // false


// ============================================================
// Task 14 : Logical NOT Operator
// ============================================================

console.log(!true);             // false
console.log(!false);            // true
console.log(!(5 > 10));         // true
console.log(!(10 > 5));         // false


// ============================================================
// Task 15 : Combination of Logical Operators
// ============================================================

console.log(5 == "5" && !(5 === 5) || 6 > 7);

// true && false || false
// false || false
// false


console.log(10 > 5 && 8 < 12 || 4 === "4");

// true && true || false
// true || false
// true


console.log(7 === 7 && 10 != "10" || 5 >= 5);

// true && false || true
// false || true
// true


console.log(15 < 10 || 20 > 15 && 5 == "5");

// false || true && true
// false || true
// true


// ============================================================
// Task 16 : Ternary Operator - Voting
// ============================================================

let age = 20;

let status = age >= 18 ? "Eligible to vote" : "Not eligible";

console.log(status);


// ============================================================
// Task 17 : Ternary Operator - Password
// ============================================================

let password = true;

let pwd = password ? "Login successful" : "Wrong password";

console.log(pwd);


// ============================================================
// Task 18 : Concatenation & Template String
// ============================================================

let concatName = "Tharun G";
let age1 = 25;
let city = "Chennai";

// Using + operator

console.log(
    "My name is " +
    concatName +
    ". I am " +
    age1 +
    " years old. I live in " +
    city +
    "."
);


// Using Template Literal

console.log(
    `My name is ${concatName}. I am ${age1} years old. I live in ${city}.`
);


// ============================================================
// Task 19 : String Conversion
// ============================================================

var v = String(100);
var w = String(true);
var x = String(undefined);
var y = String(null);
var z = String([1, 2]);

console.log(v);
console.log(w);
console.log(x);
console.log(y);
console.log(z);

console.log(typeof v);
console.log(typeof w);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


// ============================================================
// Task 20 : Number Conversion
// ============================================================

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));


// ============================================================
// Task 21 : Boolean Conversion
// ============================================================

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


// ============================================================
// Task 22 : Flow Control - Voting Eligibility
// ============================================================

let userAge1 = Number(prompt("Enter your Age : "));

if (userAge1 >= 18) {
    console.log("You can vote");
}
else {
    console.log("You can't vote");
}


// ============================================================
// Task 23 : Positive or Negative
// ============================================================

let number = Number(prompt("Enter one Number : "));

if (number > 0) {
    console.log("Number is Positive");
}
else if (number < 0) {
    console.log("Number is Negative");
}
else {
    console.log("Number is Zero");
}


// ============================================================
// Task 24 : Grade System
// ============================================================

let marks = Number(prompt("Enter your marks : "));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
}
else if (marks >= 80 && marks < 90) {
    console.log("B Grade");
}
else if (marks >= 70 && marks < 80) {
    console.log("C Grade");
}
else if (marks >= 60 && marks < 70) {
    console.log("D Grade");
}
else if (marks >= 0 && marks < 60) {
    console.log("Fail");
}
else {
    console.log("Invalid marks");
}


// ============================================================
// Task 25 : Nested If - Job Eligibility
// ============================================================

let age2 = Number(prompt("Enter your Age : "));
let height = Number(prompt("Enter your Height in cm : "));
let weight = Number(prompt("Enter your Weight in kg : "));

if (age2 >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            alert("Congratulations! You are selected");
        }
        else {
            alert("Your Weight is not enough");
        }

    }
    else {
        alert("Your Height is not enough");
    }

}
else {
    alert("Your Age is not enough");
}


// ============================================================
// Task 26 : Switch - Traffic Light
// ============================================================

let color = prompt(
    "Enter the Traffic light color in lowercase letters:"
);

switch (color) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Incorrect input");
        break;
}


// ============================================================
// Task 27 : Switch - Day
// ============================================================

let day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
        break;
}


// ============================================================
// Task 28 : Final Mini Project
// Student Result System
// ============================================================


// Step 1 : User Details

let studentName = prompt("Enter your name : ");
let studentAge = Number(prompt("Enter your Age : "));
let studentCity = prompt("Enter your City : ");


// Step 2 : Get Marks

let marks1 = Number(
    prompt("Enter your Tamil subject marks : ")
);

let marks2 = Number(
    prompt("Enter your English subject marks : ")
);

let marks3 = Number(
    prompt("Enter your Maths subject marks : ")
);


// Step 3 : Calculate Total

let totalMarks = marks1 + marks2 + marks3;


// Step 4 : Calculate Average

let average = totalMarks / 3;


// Step 5 : Check Grade

let studentGrade;

if (average >= 90 && average <= 100) {
    studentGrade = "A";
}
else if (average >= 80) {
    studentGrade = "B";
}
else if (average >= 70) {
    studentGrade = "C";
}
else if (average >= 60) {
    studentGrade = "D";
}
else if (average >= 0) {
    studentGrade = "Fail";
}
else {
    studentGrade = "Invalid";
}


// Step 6 : Check Voting Eligibility

let vote = studentAge >= 18
    ? "Eligible"
    : "Not eligible";


// Step 7 : Display Result

let output = `
Name    : ${studentName}
Age     : ${studentAge}
City    : ${studentCity}
Total   : ${totalMarks}
Average : ${average.toFixed(2)}
Grade   : ${studentGrade}
Voting  : ${vote}
`;

console.log(output);

alert(output);