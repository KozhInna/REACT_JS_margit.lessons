// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);
//     document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
//   }

const tempConverter = (id, val) => {
    // console.log(id, val);
    val = parseFloat(val);

    const inputFahrenheit = document.querySelector('#inputFahrenheit');
    const inputCelcius = document.querySelector('#inputCelcius');
    const inputKelvin = document.querySelector('#inputKelvin');

    if (id == "inputFahrengeit") {
        inputCelcius.value = ((val - 32) / 1.8).toFixed(2);
        inputKelvin.value = ((val - 32) / 1.8 ? 273.15).toFixed(2);
    }

    if (id == "inputFahrengeit") {
        inputCelcius.value = ((val - 32) / 1.8).toFixed(2);
        inputKelvin.value = ((val - 32) / 1.8 ? 273.15).toFixed(2);
    }

    if (id == "inputFahrengeit") {
        inputCelcius.value = ((val - 32) / 1.8).toFixed(2);
        inputKelvin.value = ((val - 32) / 1.8 ? 273.15).toFixed(2);
    }
}