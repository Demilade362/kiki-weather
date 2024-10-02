const cityForm = document.querySelector('.cityForm')
const card = document.querySelector('.card');
const details = document.querySelector('.details')
const image = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new ForeCast();

const updateUI = data => {
    const { getLocale, getWeatherInfo } = data

    details.innerHTML = `
    <h5 class="my-3">${getLocale.EnglishName}</h5>
    <div class="my-3">${getWeatherInfo.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${getWeatherInfo.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `

    let iconSrc = `img/icons/${getWeatherInfo.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    console.log(getWeatherInfo);

    let timeSrc = getWeatherInfo.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    image.setAttribute('src', timeSrc);

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();

    cityForm.reset();

    forecast.updateWeatherInfo(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err.message))

    localStorage.setItem('city', city);
})

if (localStorage.getItem('city')) {
    forecast.updateWeatherInfo(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err.message));
}
