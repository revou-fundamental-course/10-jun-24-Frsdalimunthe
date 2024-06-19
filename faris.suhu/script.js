// jsnya
function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    let celsius;

    // Convert input value to Celsius
    if (inputUnit === 'celsius') {
        celsius = inputValue;
    } else if (inputUnit === 'fahrenheit') {
        celsius = (inputValue - 32) * 5 / 9;
    } else if (inputUnit === 'kelvin') {
        celsius = inputValue - 273.15;
    }

    // Convert Celsius to output unit
    let outputValue;
    if (outputUnit === 'celsius') {
        outputValue = celsius;
    } else if (outputUnit === 'fahrenheit') {
        outputValue = celsius * 9 / 5 + 32;
    } else if (outputUnit === 'kelvin') {
        outputValue = celsius + 273.15;
    }

    document.getElementById('outputValue').value = outputValue.toFixed(2);
}
