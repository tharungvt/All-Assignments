// Task 2 - User Information
let name = "Tharun G";
let age = 24;
let city = "Tirupattur";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);


// Task 3 - Welcome Message
let userName = "Tharun G";
alert("Welcome " + userName + "!");


// Task 4 - Age Calculator
let birthYear = 2004;
let currentYear = 2026;
let calcAge = currentYear - birthYear;

console.log("Birth Year: " + birthYear);
console.log("Age: " + calcAge);


// Task 5 - Identify Data Types
let val1 = "Hello";
let val2 = 100;
let val3 = 25.5;
let val4 = true;
let val5 = false;
let val6 = undefined;
let val7 = null;

console.log(typeof val1);
console.log(typeof val2);
console.log(typeof val3);
console.log(typeof val4);
console.log(typeof val5);
console.log(typeof val6);
console.log(typeof val7);


// Task 6 - Student Data
let student = {
    name: "Tharun G",
    age: 24,
    city: "Tirupattur",
    qualification: "B.Sc Computer Science",
    isStudent: true
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);


// Task 7 - Fruit Array
let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);


// Task 8 - Basic Calculator
let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// Task 9 - Shopping Bill
let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;
console.log("Total = " + total);


// Task 10 - Simple Marks Calculation
let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let average = totalMarks / 3;

console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + average);


// Task 11 - Post Increment
let x = 10;
let y = x++;

console.log(x);
console.log(y);


// Task 12 - Pre Increment
let p = 10;
let q = ++p;

console.log(p);
console.log(q);


// Task 13 - Post Decrement
let m = 20;
let n = m--;

console.log(m);
console.log(n);


// Task 14 - Pre Decrement
let s = 20;
let r = --s;

console.log(s);
console.log(r);


// Task 15 - Find the Final Values
let e = 5;
let f = e++;
let g = ++e;
let h = f--;

console.log(e);
console.log(f);
console.log(g);
console.log(h);


// Task 16 - Assignment Operators
let num = 10;

num += 5;
console.log(num);

num -= 5;
console.log(num);

num *= 2;
console.log(num);

num /= 2;
console.log(num);

num %= 3;
console.log(num);

num **= 2;
console.log(num);


// Task 17 - Mini Student Profile
let pName = "Tharun G";
let pAge = 24;
let pCity = "Tirupattur";
let pCollege = "M.G.R University";

let subjects = ["Maths", "Physics", "Chemistry", "English", "Tamil"];

let profile = {
    name: pName,
    age: pAge,
    city: pCity,
    subjects: subjects,
    isStudent: true
};

console.log(profile.name);
console.log(profile.age);
console.log(profile.city);
console.log(subjects[0]);
console.log(subjects[subjects.length - 1]);
console.log(subjects.length);
console.log(profile);


// Final Challenge - User + Calculator
let num1 = 10;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);