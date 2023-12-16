export class Time {
  constructor() {
    this.time = new Date()
  }

  formattedUpdatedTime() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit'};
    return this.time.toLocaleTimeString(undefined, options);
  }
}