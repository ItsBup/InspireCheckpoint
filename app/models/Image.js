import { AppState } from "../AppState.js"

export class Image {
  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.query = data.query
    this.author = data.author
    this.largeImgUrl = data.largeImgUrl
  }

  get imageCard(){
    console.log('ImageURL', this.largeImgUrl)
    return `
    <div style="background-image: url('${this.largeImgUrl}'); background-size: cover; height: 100vh; position: relative;">
      <header class="container">
        <div class="row justify-content-between align-items-center rounded text-center bg-dark m-2 text-light px-2">
          <div class="col-2 p-2" id="current-weather">
            ${AppState.weather.weatherCard}
          </div>
          <div class="col-4 p-2" id="current-time">

          </div>
          <div class="col-2 p-2" id="authstate">
          
          </div>
        </div>
      </header>

      <main>
        <section id="router-view">
          <!-- Primary viewport content -->
        </section>
      </main>
  
      <footer class="text-light">
        <div class="container rounded bg-dark text-center no-select quote-card" id="current-quote">
          ${AppState.quotes.length > 0? AppState.quotes[0].quoteCard : ''}
        </div>
      </footer>
    </div>
    `
  }
}


/* <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 24px;">MAN WHAT</div> */