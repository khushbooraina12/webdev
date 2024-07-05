function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

function deleteLast() {
    var currentValue = document.getElementsByName('display')[0].value;
    document.getElementsByName('display')[0].value = currentValue.slice(0, -1);
}

function appendValue(value) {
    document.getElementsByName('display')[0].value += value;
}

function calculateResult() {
    var result = eval(document.getElementsByName('display')[0].value);
    document.getElementsByName('display')[0].value = result;
}
