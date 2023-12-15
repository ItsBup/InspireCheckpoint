import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {
    async getWeatherApi(){
        const response = await api.get('api/weather')
        // console.log(response);
        const currentWeather = new Weather(response.data)
        AppState.weather = currentWeather
    }
    async setTemperature(unit){
        const newTempUnit = AppState.weather
        newTempUnit.temperature = unit
        console.log('Temperature updated:', newTempUnit.temperature);
        AppState.emit('weather')
    }
}

export const weatherService = new WeatherService()
