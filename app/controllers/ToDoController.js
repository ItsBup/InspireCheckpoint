import { AppState } from "../AppState.js"
import { toDoService } from "../services/ToDoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawToDo() {
  const tasks = AppState.toDos
  let toDoContent = ''
  tasks.forEach(task => toDoContent += task.toDoList)

  const totalToDO = tasks.length
  const uncompletedToDos = tasks.filter(task => !task.completed).length
  const totalContent = `Things To Do: ${uncompletedToDos} (Total: ${totalToDO})`

  console.log('Calling ToDoList:', tasks.description)
  setHTML('to-do-list', toDoContent)
  setHTML('total-to-do', totalContent)
}

// TODO filter your array of tasks to contain only uncompleted todos, and the then grab the length of that filtered array
// TODO draw that number to the page somewhere, along with the unfiltered length of the entire todo array
export class ToDoController{
  constructor() {
    console.log('ToDoController has loaded')
    AppState.on('user', this.getToDoApi)
    AppState.on('toDos', _drawToDo)
  }
  async getToDoApi(){
    try {
      await toDoService.getToDoApi()
      console.log('ToDo data updated:', AppState.toDos)
      _drawToDo()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
  async createToDo(){
    // DONE put this in a try catch!
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      await toDoService.createToDo(formData)
      form.reset()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
    
  }
  
  async deleteToDo(toDoId){
    // DONE put this in a try catch!
    try {
      let isConfirmed = await Pop.confirm("WARNING?!?", 'ONCE YOU TAKE THIS PATH THERE IS NO RETURN', 'Yeah trash it', 'error')
    if(isConfirmed){
      await toDoService.deleteToDo(toDoId)
      _drawToDo()
    }
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

  // TODO write your method to update your todo, reference togglePrepared method from spellbook in the sandboxSpellsController
}