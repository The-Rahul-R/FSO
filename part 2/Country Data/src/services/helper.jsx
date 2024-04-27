import axios from 'axios'

const allCountriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const weatherUrl = 'https://api.weatherapi.com/v1/current.json'
const apiKey = import.meta.env.Weather_KEY
console.log('apikey=',apiKey)

const getWeather =(country)=> {
    console.log('country prop=',country)
    return axios.get(`${weatherUrl}?key=${apiKey}&q=${country}`)
}

const getAllCountries =()=> {
    return axios.get(allCountriesUrl)
}

export default {
    getAllCountries,
    getWeather
}