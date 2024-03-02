// Get display element  
const display = document.getElementById('display');

// Store values 
let displayValue = '0';
let firstOperand = null;
let operator = null;

// Number buttons
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!isNaN(displayValue)) {
      displayValue = button.textContent;
    } else {
      displayValue += button.textContent;
    }
    updateDisplay();
  });
});

// Operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    firstOperand = displayValue;
    operator = button.textContent;
    updateDisplay();
  });
});

// Equals button
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
  performCalculation();
  updateDisplay();
});

// AC button
const acButton = document.getElementById('ac'); 
acButton.addEventListener('click', () => {
    clearDisplay();
    updateDisplay();
});
  
// Clear display
function clearDisplay() {
  displayValue = '0';
}

// Perform calculation 
function performCalculation() {
    if (firstOperand == null || operator == null) {
      return;
    }
    const secondOperand = displayValue;
    switch(operator) {
      case '+':
        displayValue = parseFloat(firstOperand) + parseFloat(secondOperand);
        break;
      case '-':
        displayValue = parseFloat(firstOperand) - parseFloat(secondOperand);
        break;  
      case '*': 
        displayValue = parseFloat(firstOperand) * parseFloat(secondOperand);
        break;
      case '/':
        displayValue = parseFloat(firstOperand) / parseFloat(secondOperand);
        break;
      case '%':
        displayValue = parseFloat(firstOperand) % parseFloat(secondOperand);
        break;
      default:
        return;
    }
    firstOperand = displayValue;
  }
 

// Update display
function updateDisplay() {
  display.textContent = displayValue; 
}
