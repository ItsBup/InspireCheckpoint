import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {
  constructor() {
    console.log('Weather Loaded')
    this.getWeatherApi()
  }

  async getWeatherApi(){
    try {
      await weatherService.getWeatherApi()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

}
