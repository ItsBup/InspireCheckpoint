import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js"

    
class QuoteService {
    async getQuoteApi(){
        const response = await api.get('api/quotes')
        console.log('getAPI RESPONSE', response)
        const quoteData = response.data
        const quote = new Quote(quoteData)
        AppState.quotes = [quote]
    }
}

export const quoteService = new QuoteService()
