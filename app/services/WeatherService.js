import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {
    async getWeatherApi(){
        const response = await api.get('api/weather')
        console.log(response);
        const currentWeather = new Weather(response.data)
        AppState.weather = currentWeather
        console.log(AppState.weathers)
    }
}

export const weatherService = new WeatherService()
