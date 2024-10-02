class ForeCast{
    constructor(){
        this.key = 'AdHRAe3IBoG8pK6ImjjtGShz0AqFTic3';
        this.getLocationURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.getWeatherInfoURL =  'http://dataservice.accuweather.com/currentconditions/v1/';
    }

    async updateWeatherInfo (city){
        const getLocale = await this.getLocation(city);

        const getWeatherInfo = await this.getWeather(getLocale.Key);
    
        return {
            getLocale, getWeatherInfo
        }
    }

    async getLocation(city) {
        const query = `${this.getLocationURL}?apikey=${this.key}&q=${city}`;
        const response = await fetch(query);
        const data = await response.json();
    
        return data[0];
    }

    async getWeather(id){
        const query = `${this.getWeatherInfoURL}${id}?apikey=${this.key}`;
    
        const response = await fetch(query);
        const data = await response.json();
    
        return data[0];
    }
}




// const key = 'AdHRAe3IBoG8pK6ImjjtGShz0AqFTic3';


// const getLocation = async (city) => {
//     const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(url + query);
//     const data = await response.json();

//     return data[0];
// }

// const getWeather = async (id) => {
//     const url = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
//     const query = `?apikey=${key}`;

//     const response = await fetch(url + query);
//     const data = await response.json();

//     return data[0];
// }
