export class Weather {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.main = data.main
    this.weather = data.weather
    this.temperature = '°C'
  }

  get mainTemp(){
    if (this.temperature == '°C') {
      return ((this.main.temp - 273.15).toFixed(2));
    } else {
      return ((((this.main.temp - 273.15)*9)/5 + 32).toFixed(2));
    }
  }

  get weatherCard(){
    return `
      <div class="card text-dark">
        <h4 class="text-center">${this.name}</h4>
        <p>Main Temperature: ${this.mainTemp}${this.temperature}</p>
        <div class="row justify-content-center">
        <button class="btn col-4" onclick="app.WeatherController.setTemperature('°C')">°C</button>
        <button class="btn col-4" onclick="app.WeatherController.setTemperature('°F')">°F</button>
        </div>
      </div>
    `
  }
}


