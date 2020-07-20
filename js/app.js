const weatherDisplay = document.querySelector('.weather-display');
const tempInCelsius = document.querySelector('.temp');
const tempDescription = document.querySelector('.temp-description');
const form = document.querySelector('.form');
const input = document.querySelector('#input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = input.value ;
    if(inputValue === ''){
        alert('ENTER CITY NAME')
    } else{
        getTemp(inputValue);
        weatherDisplay.style.display = 'block' ;
    }
});




function getTemp(city){
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a6012f092125c7ca15c4136ce7f3fdda`)
.then(res =>{
    const description = res.data.weather[0].description ;
    const celsius = Math.floor(res.data.main.temp - 273) ;
    displayWeather(description, celsius);

})
.catch(err => {
    alert(err.message);
})
};

function displayWeather(description, temp){
    tempInCelsius.innerHTML = `${temp} &deg C` ;
    tempDescription.innerHTML = `${description}` ;

}




