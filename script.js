function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operator, num2){
    num1 = Number(num1);
    num2 = Number(num2);

    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}


const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.numbers-container button')
const operationButtons = document.querySelectorAll('.operations-container button')

let num;
let operator;
let resetToggle = false;

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', function() {
        if(resetToggle){
            display.textContent = '';
            resetToggle = false;
        }
        display.textContent += this.textContent;
    });
});

operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', function() {
        if(this.textContent === 'Clear'){
            display.textContent = '';
        }
        if(this.textContent !== '='){
            if(!num){
                num = display.textContent;
                operator = this.textContent;
            }
            else{
                display.textContent = num = operate(num, operator, display.textContent);
                operator = this.textContent;
            }
            resetToggle = true;
        }
        else{
            if(display.textContent !== ''){
                display.textContent = operate(num, operator, display.textContent);
                num = null;
                operator = null;
            }
        }
    });
});