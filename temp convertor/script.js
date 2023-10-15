
function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    
    if (unitFrom === unitTo) {
        document.getElementById('result').textContent = "Result: " + temperature + " " + unitFrom;
        return;
    }
    
    let convertedTemperature;
    
    if (unitFrom === "celsius") {
        if (unitTo === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (unitTo === "kelvin") {
            convertedTemperature = temperature + 273.15;
        }
    } else if (unitFrom === "fahrenheit") {
        if (unitTo === "celsius") {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (unitTo === "kelvin") {
            convertedTemperature = ((temperature - 32) * 5/9) + 273.15;
        }
    } else if (unitFrom === "kelvin") {
        if (unitTo === "celsius") {
            convertedTemperature = temperature - 273.15;
        } else if (unitTo === "fahrenheit") {
            convertedTemperature = ((temperature - 273.15) * 9/5) + 32;
        }
    }
    
    document.getElementById('result').textContent = "Result: " + convertedTemperature.toFixed(2) + " " + unitTo;
}
