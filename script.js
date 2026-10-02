// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================


// ==========================================
// 1. Store Application Data
// ==========================================

// Budget variable
let budget = 0;

// Array for storing expenses
let expenses = [];


// ==========================================
// 2. Reusable Functions
// ==========================================

// Function to calculate total expenses
function calculateTotalExpenses(expenses) {

    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}


// Function to calculate remaining balance
function calculateRemainingBalance(budget, totalExpenses) {

    return budget - totalExpenses;
}


// ==========================================
// 3. Collect User Input
// ==========================================

// Ask the user for their monthly budget
let budgetInput = prompt(
    "Welcome to SpendWise!\n\nEnter your monthly budget:"
);


// Convert the input from a string to a number
budget = Number(budgetInput);


// Ask the user for an expense
let expenseName = prompt(
    "Enter the name of an expense:"
);


// Ask for the expense amount
let expenseAmount = Number(
    prompt("Enter the expense amount:")
);


// Ask for the expense category
let expenseCategory = prompt(
    "Enter the expense category:"
);


// ==========================================
// 4. Store Expense Data
// ==========================================

let expense = {
    name: expenseName,
    amount: expenseAmount,
    category: expenseCategory
};


// Add the expense to the expenses array
expenses.push(expense);


// ==========================================
// 5. Perform Budget Calculations
// ==========================================

// Calculate total expenses
let totalExpenses = calculateTotalExpenses(expenses);


// Calculate remaining balance
let remainingBalance = calculateRemainingBalance(
    budget,
    totalExpenses
);


// ==========================================
// 6. Display Results in Browser Console
// ==========================================

console.log("====================================");
console.log("       SPENDWISE BUDGET SUMMARY     ");
console.log("====================================");

console.log("Budget: KSh " + budget);

console.log("Total Expenses: KSh " + totalExpenses);

console.log("Remaining Balance: KSh " + remainingBalance);

console.log("------------------------------------");

console.log("Expense Name: " + expense.name);

console.log("Expense Amount: KSh " + expense.amount);

console.log("Expense Category: " + expense.category);

console.log("====================================");


// Display a message depending on the remaining balance
if (remainingBalance > 0) {

    console.log(
        "You have KSh " +
        remainingBalance +
        " remaining in your budget."
    );

} else if (remainingBalance === 0) {

    console.log("Your budget has been fully spent.");

} else {

    console.log(
        "You have exceeded your budget by KSh " +
        Math.abs(remainingBalance) +
        "."
    );
}