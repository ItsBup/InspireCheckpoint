import { api } from "./AxiosService.js"

class WeatherService {
    async getWeatherApi(){
        const response = await api.get('api/weather')
        console.log('pizza time', response)
    }
}

export const weatherService = new WeatherService()
