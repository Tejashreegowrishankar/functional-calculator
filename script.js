let currentInput = '';
let operator = '';
let result = 0;
let screen = document.getElementById('screen');

function appendToScreen(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        operator = value;
        currentInput += ` ${value} `;
    } else if (value === '=') {
        currentInput = eval(currentInput);
    } else {
        currentInput += value;
    }
    screen.innerText = currentInput;
}

function clearScreen() {
    currentInput = '';
    operator = '';
    screen.innerText = '0';
}

function calculate() {
    currentInput = eval(currentInput);
    screen.innerText = currentInput;
}
