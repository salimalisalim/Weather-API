function fetchWeather() {
    let cityName = place.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("Data fetch failed from source")
            }
        })
        .then(data => displayWeather(data)).catch(err => alert(err.message));

}

var html_data = "";

function displayWeather(data) {
    let City = data.name;
    let cityTemp = data.main.temp;
    let cityMinTemp = data.main.temp_min;
    let cityMaxTemp = data.main.temp_max;
    let cityWeather = data.weather[0].main;
    let cityWind = data.wind.speed;
    let cityTimezone = data.timezone;

    html_data = `<div class="d-flex">
    <h6 class="flex-grow-1">${City}</h6>
    <h6>${cityTimezone}</h6>
</div>

<div class="d-flex flex-column text-center mt-5 mb-4">
    <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${cityTemp}°C </h6>
    <span class="small" style="color: #868B94">${cityWeather}</span>
</div>

<div class="d-flex align-items-center">
    <div class="flex-grow-1" style="font-size: 1rem;">
        <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span
                class="ms-1">
                ${cityWind} km/h </span></div>
        <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span
                class="ms-1">
                Min Temp: ${cityMinTemp} </span></div>
        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span
                class="ms-1">
                Max Temp: ${cityMaxTemp}</span></div>
    </div>
    <div>
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
            width="100px">
    </div>
</div>`

    document.querySelector("#result").innerHTML = html_data;

}

