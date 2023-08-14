function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(firstNumber, operator, secNumber) {
    if (operator == "+") {
        return add(firstNumber, secNumber);
    } else if (operator == "–") {
        return subtract(firstNumber, secNumber);
    } else if (operator == "×") {
        return multiply(firstNumber, secNumber);
    } else if (operator == "÷") {
        return divide(firstNumber, secNumber);
    };
};
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
var displaying = "";

numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        displaying = displaying + event.target.value;
        display.textContent = displaying;
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        displaying = displaying + " " + event.target.value + " ";
        display.textContent = displaying;
    });
});

const equal = document.querySelector("#equal");
const result = document.querySelector(".result");
equal.addEventListener("click", (event) => {
    var tempDisplay = displaying.replace(/\s+/g, '');
    var strArray = tempDisplay.split('');
    
    // find the index of the operator
    var allOperators = ['+', '–', '×', '÷'];
    var operatorIndex = -1;
    for (var i = 0; i < strArray.length; i++) {
        var currentChar = strArray[i];
        if (allOperators.includes(currentChar)) {
            operatorIndex = i;
            break;
        };
    };
    if (strArray) {
        var firstNumber = parseFloat(strArray.slice(0, operatorIndex).join(''));
        var operator = strArray[operatorIndex];
        var secNumber = parseFloat(strArray.slice(operatorIndex+1, ).join(''));
    };
    
    result.textContent = operate(firstNumber, operator, secNumber);
});

// clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", (event) => {
    displaying = "";
    display.textContent = displaying;
    result.textContent = 0;
})

// delete button
const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", (event) => {
    if (displaying[displaying.length-1] == " ") {
        displaying = displaying.slice(0, displaying.length-3);
    } else {
        displaying = displaying.slice(0, displaying.length-1);
    }
    display.textContent = displaying;
});

