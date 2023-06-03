let expression = '';

function clearResult() {
  expression = '';
  updateResult();
}

function deleteDigit() {
  expression = expression.slice(0, -1);
  updateResult();
}

function appendDigit(digit) {
  expression += digit;
  updateResult();
}

function calculateResult() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateResult();
  } catch (error) {
    expression = '';
    updateResult();
    alert('Xato hisoblash amaliyoti!');
  }
}

function updateResult() {
  document.getElementById('result').value = expression;
}