const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'C') {
      currentInput = '';
      display.value = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = 'Error';
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
