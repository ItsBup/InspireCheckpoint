import { AppState } from "../AppState.js"
import { Image } from "../models/Image.js";
import { api } from "./AxiosService.js"

class ImageService {
    async getImageApi(){
        const response = await api.get('api/images')
        console.log('getAPI RESPONSE', response)
        const imageData = response.data
        const image = new Image(imageData)
        AppState.images = [image]
    }
}

export const imageService = new ImageService()