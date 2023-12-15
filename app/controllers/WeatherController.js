import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWeather(){
  const listedWeather = AppState.weather
  let content = listedWeather.weatherCard
  setHTML('current-weather',content)
  console.log(content)

}

export class WeatherController {
  constructor() {
    console.log('Weather Loaded')
    AppState.on('weather', this.getWeatherApi())
    
  }

  async getWeatherApi(){
    try {
      await weatherService.getWeatherApi()
      _drawWeather()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

}
