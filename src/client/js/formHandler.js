const fetch = require('node-fetch');
const openWeatherMapApiKey = "08a5357a79e5e1e6bf484328b9fe0360";
const openWeatherDataApiUrl = "https://api.openweathermap.org/data/2.5/weather";

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('zip').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    const weatherRes = await fetch(`${openWeatherDataApiUrl}?zip=${formText},us&appid=${openWeatherMapApiKey}&units=imperial`)
    const weatherJson = await weatherRes.json();
    document.getElementById('results').innerHTML = JSON.stringify(weatherJson);

    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

export { handleSubmit }
