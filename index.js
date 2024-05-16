function appendToDisplay(value) {
    var display = document.getElementsByName("display")[0];
    display.value += value;
}

function clearDisplay() {
    var display = document.getElementsByName("display")[0];
    display.value = '';
}

function clearLast() {
    var display = document.getElementsByName("display")[0];
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var display = document.getElementsByName("display")[0];
    try {
        var result = eval(display.value);
        // Limit the result to 3 decimals
        var roundedResult = parseFloat(result.toFixed(3));
        display.value = roundedResult;
    } catch (error) {
        display.value = 'Error';
    }
}