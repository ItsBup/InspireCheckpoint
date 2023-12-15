export class Weather {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.main = data.main
    this.weather = data.weather
  }

  get weatherCard(){
    return `
      <div class="card text-dark">
      <h4 class="text-center">${this.name}</h4>
      <p>Main Temperature: ${this.main.temp}</p>
      </div>
    `
  }
}


