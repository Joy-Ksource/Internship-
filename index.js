let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function calculate(operator) {
  displayValue += operator;
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = '';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function changeSign() {
  if (displayValue !== '') {
    displayValue = eval('-1 * ' + displayValue);
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('result').value = displayValue;
}
