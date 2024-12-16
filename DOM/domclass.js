
function add(a, b) {
    return a + b;
  }
  

  function displayResult() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').textContent = 'Please enter valid numbers.';
    } else {
      const sum = add(num1, num2);
      document.getElementById('result').textContent = sum;
    }
  }
  