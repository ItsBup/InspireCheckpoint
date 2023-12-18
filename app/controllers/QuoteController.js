import { AppState } from "../AppState.js"
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuote() {
  try {
    const quotes = AppState.quotes
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    console.log('Random Quote:', randomQuote)
    if (randomQuote) {
      const content = randomQuote.quoteCard
      console.log('Content:', content)
      setHTML('current-quote', content)
      console.log('Drawn Quote:', randomQuote)
    }
  } catch (error) {
    console.error('Error drawing quote:', error)
  }
}

export class QuoteController {
  constructor() {
    console.log('Quote Controller Loaded')
    AppState.on('user', this.getQuoteApi) 
    AppState.on('quotes', _drawQuote)
  }
  async getQuoteApi(){
    try {
      await quoteService.getQuoteApi()
      console.log('Quote data updated:', AppState.quotes);
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}
