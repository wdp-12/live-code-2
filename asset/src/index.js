//make object for storing
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    secondNumber: false,
};

//to update the calculator
const updateDisplay = () => {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

//to empty the content of calculator
const clearCalculator = () => {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.secondNumber = false;
}

const inputDigit = (num) => {
    if (calculator.secondNumber && calculator.displayNumber === calculator.firstNumber) {
        calculator.displayNumber = num;
    } else {
        if (calculator.displayNumber === '0') {
            calculator.displayNumber = num;
        } else {
            calculator.displayNumber += num;
        }
    }
}

//to not click the 2x operator
const handleOperator = (operator) => {
    if (!calculator.secondNumber) {
        calculator.operator = operator;
        calculator.secondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
    } else {
        alert('Operator sudah ditetapkan');
    }
}

//main of calculation
const performCalculation = () => {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert('Anda belum menetapkan operator');
        return;
    }

    let result;
    const firstNumber = parseFloat(calculator.firstNumber);
    const secondNumber = parseFloat(calculator.displayNumber);

    switch (calculator.operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                alert('Tidak bisa membagi dengan 0');
                clearCalculator();
                updateDisplay();
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            return;
    }

    calculator.displayNumber = result;
    calculator.operator = null;
    calculator.secondNumber = false;
}

//event listeners
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const buttonText = button.textContent;
        // Check if the key pressed is a number
        if (!isNaN(buttonText)) {
            inputDigit(buttonText); 
            updateDisplay(); 
        }else if (buttonText === '=') {
                performCalculation();
                updateDisplay();
            } else if (buttonText === 'CE') {
                clearCalculator();
                updateDisplay();
            } else {
                handleOperator(buttonText);
            }
    });
});

// Initialize the initial display
updateDisplay();
