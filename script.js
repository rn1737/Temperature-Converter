const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFar = (cel) => {
        let farenheit = Math.round((cel * 9 / 5) + 32);
        return farenheit;
    }

    const farToCel = (far) => {
        let celcius = Math.round((far - 32) * 5 / 9);
        return celcius;
    }


    let result;

    if (valueTemp == 'cel') {
        result = celToFar(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Farenheit`;


    } else {
        result = farToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Celcius`;

    }
}

