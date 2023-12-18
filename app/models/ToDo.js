export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
  }
  
  get toDoList(){
    return `
      <div class="text-dark d-flex justify-content-between">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" ${this.completed ? 'checked' : ''} id="check-box" >
          <label class="form-check-label ${this.completed ? 'completed' : ''}" for="flexCheck">
            ${this.description}
          </label>
        </div>
        <span>
          <button onclick="app.ToDoController.deleteToDo('${this.id}')" class="btn btn-outline-danger" title="Delete Task"><i class="mdi mdi-trash-can-outline"></i></button>
        </span>
      </div>
    `
  }

}