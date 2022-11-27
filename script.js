let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


searchButton.addEventListener('click', (e) => {


    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value = '';

});


const getWeather = async (city) => {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e613adfc46eb3776ee72a1aeb450d76 `,

            { mode: 'cors' }
        );

        const weatherData = await response.json();
        console.log(weatherData);
        const { name } = weatherData;
        const { feels_like } = weatherData.main;
        const { id, main } = weatherData.weather[0];
        loc.textContent = name;
        climate.textContent = main;
        tempvalue.textContent = Math.round(feels_like - 273);


        if (id < 232 && id > 200) {
            tempicon.src = "image/thunderstorm.jpg"
        }
        else if (id < 321 && id > 300) {
            tempicon.src = "image/clouds.jpg"
        }
        else if (id < 531 && id > 500) {
            tempicon.src = "image/rain.jpg"
        }
        else if (id < 622 && id > 600) {
            tempicon.src = "image/snow.jpg"
        }
        else if (id < 781 && id > 700) {
            tempicon.src = "image/mist.jpg"
        }
        else if (id < 804 && id >= 800) {
            tempicon.src = "image/clear.jpg"
        }

    }

    catch (error) {
        alert('city not found');
    }




};





















window.addEventListener("load", () => {


    let long;
    let lat;


    if (navigator.geolocation) {


        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";

            const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1e613adfc46eb3776ee72a1aeb450d76`

            fetch(api).then((response) => {

                return response.json();

            })

                .then(data => {

                    const { name } = data;
                    const { feels_like } = data.main;
                    const { id, main } = data.weather[0];


                    loc.textContent = name;
                    climate.textContent = main;
                    tempvalue.textContent = Math.round(feels_like - 273);
                    if (id < 232 && id > 200) {
                        tempicon.src = "image/thunderstorm.jpg"
                    }
                    else if (id < 321 && id > 300) {
                        tempicon.src = "image/clouds.jpg"
                    }
                    else if (id < 531 && id > 500) {
                        tempicon.src = "image/rain.jpg"
                    }
                    else if (id < 622 && id > 600) {
                        tempicon.src = "image/snow.jpg"
                    }
                    else if (id < 781 && id > 700) {
                        tempicon.src = "image/mist.jpg"
                    }
                    else if (id < 804 && id >= 800) {
                        tempicon.src = "image/clear.jpg"
                    }






                    console.log(data);


                })

        }




        )
    }


})