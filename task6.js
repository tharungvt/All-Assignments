// Task 1 - Student Result Analyzer

function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {

    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = total / 5;

    let result;
    let grade;

    if (mark1 < 50 || mark2 < 50 || mark3 < 50 || mark4 < 50 || mark5 < 50) {
        result = "Fail";
        grade = "Fail";
    } else {
        result = "Pass";

        if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 60) {
            grade = "C";
        } else {
            grade = "D";
        }
    }

    console.log("Task 1 - Student Result");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}

studentResult("Tharun", "CSE", 85, 78, 92, 88, 80);


// Task 2 - Employee Salary Calculator

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Task 2 - Employee Salary");
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);


// Task 3 - Product Filter System

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

let expensiveProducts = products.filter(product => product.price > 2000);

console.log("Task 3 - Product Filter");
console.log("Products above ₹2,000:", expensiveProducts);

let electronics = products.filter(product => product.category === "electronics");

console.log("Electronics:", electronics);

let cheapProduct = products.find(product => product.price < 1000);

console.log("First product below ₹1,000:", cheapProduct);

let totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Total Price:", totalPrice);

let expensive = products.some(product => product.price > 50000);

console.log("Any product above ₹50,000:", expensive);

let above500 = products.every(product => product.price > 500);

console.log("Every product above ₹500:", above500);


// Task 4 - Employee Management

let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Priya",
        role: "UI Designer",
        salary: 45000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Full Stack Developer",
        salary: 60000
    },
    {
        id: 105,
        name: "Divya",
        role: "HR Manager",
        salary: 55000
    },
    {
        id: 106,
        name: "Vijay",
        role: "Software Tester",
        salary: 35000
    }
];

let employeeNames = employees.map(employee => employee.name);

console.log("Task 4 - Employee Management");
console.log("Employee Names:", employeeNames);

let highEarners = employees.filter(employee => employee.salary > 40000);

console.log("Employees above ₹40,000:", highEarners);

let employee103 = employees.find(employee => employee.id === 103);

console.log("Employee with ID 103:", employee103);

let totalEmployeeSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalEmployeeSalary);

let highestPaid = employees.reduce((highest, employee) => {

    if (employee.salary > highest.salary) {
        return employee;
    }

    return highest;

});

console.log("Highest Paid Employee:", highestPaid);

let sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);

console.log("Highest to Lowest:", sortedEmployees);

let namesOnly = employees.map(employee => employee.name);

console.log("Names Only:", namesOnly);


// Task 5 - Shopping Cart

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let itemTotals = cart.map(item => {

        return {
            name: item.name,
            total: item.price * item.quantity
        };

    });

    console.log("Task 5 - Shopping Cart");
    console.log("Item Totals:", itemTotals);

    let total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    console.log("Total Cart Value:", total);

    let discount = 0;

    if (total > 50000) {
        discount = total * 0.10;
    }

    console.log("Discount:", discount);

    let finalAmount = total - discount;

    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);


// Task 6 - Student Search System

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

let names = students.map(student => student.name);

console.log("Task 6 - Student Search");
console.log("Student Names:", names);

let above80 = students.filter(student => student.mark > 80);

console.log("Students above 80:", above80);

let student = students.find(student => student.name === "Priya");

console.log("Student named Priya:", student);

let totalMarks = students.reduce((sum, student) => {
    return sum + student.mark;
}, 0);

let average = totalMarks / students.length;

console.log("Average Mark:", average);

let failed = students.some(student => student.mark < 50);

console.log("Anyone Failed:", failed);

let above40 = students.every(student => student.mark > 40);

console.log("Everyone scored above 40:", above40);

let sortedStudents = [...students].sort((a, b) => a.mark - b.mark);

console.log("Students sorted by marks:", sortedStudents);


// Task 7 - Array Transformation Challenge

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubleNumbers = numbers.map(number => number * 2);

console.log("Task 7 - Array Transformation");
console.log("Numbers × 2:", doubleNumbers);

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Even Numbers:", evenNumbers);

let greaterNumbers = numbers.filter(number => number > 15);

console.log("Numbers greater than 15:", greaterNumbers);

let firstNumber = numbers.find(number => number > 20);

console.log("First number greater than 20:", firstNumber);

let numberTotal = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log("Total:", numberTotal);

let greaterThan40 = numbers.some(number => number > 40);

console.log("Any number greater than 40:", greaterThan40);

let positive = numbers.every(number => number > 0);

console.log("Every number is positive:", positive);

let sortedNumbers = [...numbers].sort((a, b) => b - a);

console.log("Highest to Lowest:", sortedNumbers);


// Task 8 - String Analyzer

let sentence = prompt("Enter a sentence:");

console.log("Task 8 - String Analyzer");
console.log("Original Sentence:", sentence);

console.log("Total Characters:", sentence.length);

console.log("Uppercase:", sentence.toUpperCase());

console.log("Lowercase:", sentence.toLowerCase());

console.log("Contains JavaScript:", sentence.includes("JavaScript"));

console.log("First Character:", sentence.slice(0, 1));

console.log("Last Character:", sentence.slice(-1));

let words = sentence.trim().split(/\s+/);

console.log("Number of Words:", words.length);

let newSentence = sentence.replace("JavaScript", "Python");

console.log("After Replace:", newSentence);

let sentenceArray = sentence.split(" ");

console.log("Sentence Array:", sentenceArray);


// Final Mini Project - Employee Dashboard

let dashboardEmployees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

console.log("Final Mini Project - Employee Dashboard");


// 1. Employee List

console.log("All Employees:");

dashboardEmployees.forEach(employee => {
    console.log(employee);
});


// 2. Search

let searchName = "Arun";

let searchEmployee = dashboardEmployees.find(
    employee => employee.name === searchName
);

console.log("Search Result:", searchEmployee);


// 3. Department Filter

let departmentEmployees = dashboardEmployees.filter(
    employee => employee.department === "IT"
);

console.log("IT Employees:", departmentEmployees);


// 4. Salary Filter

let highSalaryEmployees = dashboardEmployees.filter(
    employee => employee.salary > 50000
);

console.log("Employees above ₹50,000:", highSalaryEmployees);


// 5. Salary Calculation

let companySalary = dashboardEmployees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Company Salary:", companySalary);


// 6. Highest Salary

let highestEmployee = dashboardEmployees.reduce((highest, employee) => {

    if (employee.salary > highest.salary) {
        return employee;
    }

    return highest;

});

console.log("Highest Paid Employee:", highestEmployee);


// 7. Experience

let experiencedEmployees = dashboardEmployees.filter(
    employee => employee.experience > 3
);

console.log(
    "Employees with more than 3 years experience:",
    experiencedEmployees
);


// 8. Sorting

let salaryLowToHigh = [...dashboardEmployees].sort(
    (a, b) => a.salary - b.salary
);

console.log("Salary Low to High:", salaryLowToHigh);

let salaryHighToLow = [...dashboardEmployees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Salary High to Low:", salaryHighToLow);


// 9. Statistics

let highestSalary = highestEmployee.salary;

let averageSalary = companySalary / dashboardEmployees.length;

console.log("Total Employees:", dashboardEmployees.length);
console.log("Total Salary: ₹" + companySalary);
console.log("Highest Salary: ₹" + highestSalary);
console.log("Average Salary: ₹" + Math.round(averageSalary));