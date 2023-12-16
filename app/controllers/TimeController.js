import { AppState } from "../AppState.js";
import { Time } from "../models/TIme.js";
import { setHTML } from "../utils/Writer.js";

function _drawTime() {
  const currentTimeArray = AppState.time;
  if (currentTimeArray && currentTimeArray.length > 0) {
    const content = currentTimeArray[0].formattedUpdatedTime();
    setHTML('current-time', content);
    console.log('Drawn Time:', content);
  } else {
    console.error('Current time is null or undefined.');
  }
}

export class TimeController {
  constructor() {
    console.log('Time Loaded')
    AppState.on('time',_drawTime)
    this.start()
  }

  start() {
    setInterval(() => {
      this.time = new Date();
      AppState.time = [new Time()];
      AppState.emit('time');
    }, 1000);
  }
}