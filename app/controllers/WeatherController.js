import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWeather(){
  const listedWeather = AppState.weather
  let content = listedWeather.weatherCard
  setHTML('current-weather',content)
  console.log('Drawn Weather:', AppState.weather)
}

export class WeatherController {
  constructor() {
    console.log('Weather Loaded')
    AppState.on('user', this.getWeatherApi)
    AppState.on('weather', _drawWeather)
  }

  async getWeatherApi(){
    try {
      await weatherService.getWeatherApi()
      console.log('Weather data updated:', AppState.weather);
      _drawWeather()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
  async setTemperature(unit){
    try {
      await weatherService.setTemperature(unit)
      console.log('click!', unit)
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }

  }
}


