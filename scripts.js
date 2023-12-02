function calculateFactorial() {
    const numberInput = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');

    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0) {
        resultElement.textContent = 'Invalid input. Please enter a non-negative number.';
        return;
    }

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number }),
    })
    .then(response => response.json())
    .then(data => {
        resultElement.textContent = `Factorial: ${data.result}`;
    })
    .catch(error => {
        console.error('Error:', error);
        resultElement.textContent = 'An error occurred while calculating the factorial.';
    });
}
