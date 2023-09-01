function appendToResult(value) {
    document.getElementById('result').value += value;
}

function operate(operator) {
    document.getElementById('result').value += operator;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        const expression = document.getElementById('result').value;
        const result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function sliceResult() {
    const inputValue = document.getElementById('result').value;
    if (inputValue.length > 0) {
        const slicedValue = inputValue.slice(0, -1); // Slice all characters except the last one
        document.getElementById('result').value = slicedValue;
}
}

