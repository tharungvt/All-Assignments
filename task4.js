// ============================================================
// Task 1 - For Loop
// Print numbers from 1 to 10
// ============================================================

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ============================================================
// Task 2 - Reverse Number
// Print numbers from 10 to 1
// ============================================================

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ============================================================
// Task 3 - Even Numbers
// Print even numbers from 1 to 20
// ============================================================

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// ============================================================
// Task 4 - Odd Numbers
// Print odd numbers from 1 to 20
// ============================================================

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// ============================================================
// Task 5 - Multiplication Table
// Get a number from the user
// ============================================================

let tableNumber = Number(prompt("Enter a number: "));

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


// ============================================================
// Task 6 - Countdown
// Using while loop
// ============================================================

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


// ============================================================
// Task 7 - Sum of Numbers
// Using while loop
// ============================================================

let number = 1;
let sum = 0;

while (number <= 10) {
    sum = sum + number;
    number++;
}

console.log("Sum =", sum);


// ============================================================
// Task 8 - Do While
// Print numbers from 1 to 5
// ============================================================

let num = 1;

do {
    console.log(num);
    num++;
} while (num <= 5);


// ============================================================
// Task 9 - Do While Understanding
// ============================================================

let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);

/*
Output:
10

The do...while loop runs at least one time.

First it prints 10.
After that it checks the condition.

10 <= 5 is false.

But the code already ran once.
So the output is 10.
*/


// ============================================================
// Task 10 - String Characters
// Using for...of
// ============================================================

let name = "javascript";

for (let character of name) {
    console.log(character);
}


// ============================================================
// Task 11 - Array Values
// Using for...of
// ============================================================

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}


// ============================================================
// Task 12 - Student Names
// Using for...of
// ============================================================

let students = ["Tharun G", "Priya", "Kumar", "Divya", "Rahul"];

for (let student of students) {
    console.log("Student: " + student);
}


// ============================================================
// Task 13 - Employee Object
// Using for...in
// ============================================================

let employee = {
    name: "Tharun G",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}


// ============================================================
// Task 14 - Product Object
// Using for...in
// ============================================================

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "HP",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}


// ============================================================
// Task 15 - Simple Function
// Call welcome 3 times
// ============================================================

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


// ============================================================
// Task 16 - Function With Parameter
// ============================================================

function greet(name) {
    console.log("Hello " + name);
}

greet("Tharun G");
greet("Priya");
greet("Kumar");


// ============================================================
// Task 17 - Multiple Parameters
// ============================================================

function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Tharun G", 25, "Computer Science");
student("Priya", 23, "Information Technology");
student("Kumar", 21, "Electronics");


// ============================================================
// Task 18 - Addition Function
// ============================================================

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// ============================================================
// Task 19 - Salary
// ============================================================

function salary(amount) {
    return amount;
}

let employeeSalary = salary(50000);

console.log("Salary:", employeeSalary);


// ============================================================
// Task 20 - Bonus Calculator
// ============================================================

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let totalSalary = bonus(50000, 5000);

console.log("Total Salary:", totalSalary);


// ============================================================
// Task 21 - Default Parameter
// ============================================================

function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Tharun G");
employeeDetails("Priya", "Designer");

/*
Output:

Name: Tharun G
Role: Developer

Name: Priya
Role: Designer

Tharun G does not have a role.
So the default value "Developer" is used.

Priya has given "Designer".
So "Designer" is used.
*/


// ============================================================
// Task 22 - Named Function
// Find square of 5 different numbers
// ============================================================

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(4));
console.log(square(5));
console.log(square(7));
console.log(square(10));


// ============================================================
// Task 23 - Anonymous Function
// ============================================================

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));


// ============================================================
// Task 24 - Arrow Function
// Multiply two numbers
// ============================================================

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 5));


// ============================================================
// Task 25 - Scope
// ============================================================

function test() {

    if (true) {

        let a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

}

test();

/*
Output:

10
20
30

a, b and c are created inside the if block.

let and const have block scope.

So they cannot be accessed outside the if block.
*/


// ============================================================
// Task 26 - Hoisting
// ============================================================

/*
Example:

console.log(a);

var a = 10;

The output is:

undefined

But we are not using var in this assignment.
*/


// ============================================================
// Task 27 - Hoisting with let
// ============================================================

/*
Example:

console.log(b);

let b = 20;

This gives ReferenceError.

let cannot be accessed before its declaration.
*/


// ============================================================
// Task 28 - Hoisting with const
// ============================================================

/*
Example:

console.log(c);

const c = 30;

This gives ReferenceError.

const cannot be accessed before its declaration.
*/


/*
Difference:

var:
Can be accessed before declaration and gives undefined.

let:
Cannot be accessed before declaration.

const:
Cannot be accessed before declaration.

In this assignment, we are using let and const only.
*/


// ============================================================
// Task 29 - IIFE
// Self Invoking Function
// ============================================================

(function() {
    console.log("Welcome to JavaScript");
})();


// IIFE with parameters

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);


// ============================================================
// Task 30 - Callback / Higher-Order Function
// ============================================================

function welcomeMessage() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeMessage);

/*
welcomeMessage is the callback function.

execute is the higher-order function because
it receives another function as a parameter.
*/


// ============================================================
// Task 31 - Generator Function
// Cashback
// ============================================================

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackResult = cashback();

for (let value of cashbackResult) {
    console.log(value);
}


// ============================================================
// Task 32 - FINAL MINI PROJECT
// Employee Management Console
// ============================================================


// Employee data

let employees = [

    {
        name: "Tharun G",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

    {
        name: "Kumar",
        age: 27,
        department: "IT",
        role: "Tester",
        salary: 45000
    },

    {
        name: "Divya",
        age: 23,
        department: "Finance",
        role: "Accountant",
        salary: 38000
    }
];


// ============================================================
// 1. for...of
// Print every employee
// ============================================================

console.log("----- Employee Details -----");

for (let employee of employees) {

    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);

    console.log("--------------------");
}


// ============================================================
// 2. for...in
// Print each employee's keys and values
// ============================================================

console.log("----- Employee Keys and Values -----");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key + ":", employee[key]);
    }

    console.log("--------------------");
}


// ============================================================
// 3. Function
// Display employee information
// ============================================================

function displayEmployee(employee) {

    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);
}


// ============================================================
// 4. Function Parameters
// Pass employee information to the function
// ============================================================

console.log("----- Using Function -----");

for (let employee of employees) {
    displayEmployee(employee);
}


// ============================================================
// 5. Return
// Return employee salary
// ============================================================

function getSalary(employee) {
    return employee.salary;
}

let salaryResult = getSalary(employees[0]);

console.log("Employee Salary:", salaryResult);


// ============================================================
// 6. Condition
// Check Salary >= 40000
// ============================================================

console.log("----- Salary Check -----");

for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary 40000 or more");
    }
    else {
        console.log(employee.name + " has salary below 40000");
    }
}


// ============================================================
// 7. Arrow Function
// Simple calculation
// ============================================================

let calculateSalary = (salary, bonus) => {
    return salary + bonus;
};

let finalSalary = calculateSalary(40000, 5000);

console.log("Salary with Bonus:", finalSalary);


// ============================================================
// 8. Generator
// Employee Benefits
// ============================================================

function* benefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

console.log("----- Employee Benefits -----");

for (let benefit of employeeBenefits) {
    console.log(benefit);
}