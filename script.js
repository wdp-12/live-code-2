let displayValue = '';

function tampilkan(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function Result() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = displayValue;
    }
}
