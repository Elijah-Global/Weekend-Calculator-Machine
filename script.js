// Declare a fixed budget

const fixedBudget = 100;
let expense = 40;

// creating an object spending

const spending = {
    budget: "",
    expense: "",
}

// writting the get remainig method

const getRemainig = function(){
    return document.getElementById("remainingDisplay").innerHTML = "Remainig:" + "$" + (fixedBudget - expenseInput.value)  ;
}

function addExpense(){
    return document.getElementById("expenseDisplay").innerHTML = "spent:" + "$" + expenseInput.value ;
}

spending.expense = document.getElementById("expenseDisplay");
const expenseInput = document.getElementById("expenseInput");

// invoking the function with a button id

const expenseBtn = document.getElementById("btn");

// updating the expending object

spending.expense = document.getElementById("expenseInput").value;
spending.budget = fixedBudget;

// calling the function and the method
expenseBtn.addEventListener('click',
    function(){
        addExpense();
        getRemainig();
        updateDisplay();
    }
)
console.log(spending);


// writting the update display
function updateDisplay(){
    return document.getElementById("updateDisplay").innerHTML = "the budget is " + spending.budget + " the expenses is $" + expenseInput.value + "and the budget " + getRemainig();
}



