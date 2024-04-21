function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  var displayValue = document.getElementById('display').value;
  var result = eval(displayValue); // WARNING: Avoid using eval() in production due to security risks
  document.getElementById('display').value = result;
}
