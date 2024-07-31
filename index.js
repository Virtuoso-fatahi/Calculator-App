let display = document.getElementById('display');
let currentInput = '0';
let operator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function appendCharacter(char) {
    if (currentInput === '0' && char !== '.') {
        currentInput = char;
    } else {
        currentInput += char;
    }
    updateDisplay();
}

function calculateResult() {
    if (operator === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        case '%':
            result = (prev / 100) * current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function appendCharacter(char) {
    if ('+-*/%'.includes(char)) {
        if (operator !== '') {
            calculateResult();
        }
        operator = char;
        previousInput = currentInput;
        currentInput = '0';
    } else {
        if (currentInput === '0' && char !== '.') {
            currentInput = char;
        } else {
            currentInput += char;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}

updateDisplay();
