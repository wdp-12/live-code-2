function addToDisplay(value) {
    document.calculator.display.value += value;
}

function clearDisplay() {
    document.calculator.display.value = '';
}

function calculate() {
    try {
        document.calculator.display.value = eval(document.calculator.display.value);
    } catch (err) {
        document.calculator.display.value = 'Error';
    }
}