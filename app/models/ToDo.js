export class ToDO {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
    // TODO add additional properties if needed
  }
}
