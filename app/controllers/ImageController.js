import { AppState } from "../AppState.js"
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawImage(){
  const images = AppState.images
  const randomImage = images[Math.floor(Math.random() * images.length)]
  if (randomImage) {
    const content = randomImage.imageCard
    setHTML('current-background', content)
    // console.log('Drawn BackgroundImage:', randomImage)
  }
}

export class ImageController {
  constructor() {
    console.log('Image Controller Loaded')
    AppState.on('user', this.getImageApi) 
    AppState.on('images', _drawImage)
  }

  async getImageApi(){
    try {
      await imageService.getImageApi()
      // console.log('Image data updated:', AppState.images)
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

}
