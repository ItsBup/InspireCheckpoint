import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { loadState, saveState } from "../utils/Store.js";
import { api } from "./AxiosService.js";


class ToDoService {
    async getToDoApi(){
        const response = await api.get('api/todos')
        console.log('todoAPI response:', response)
        const todosData = response.data || [];
        const todos = todosData.map(todoData => new ToDo(todoData))
        AppState.toDos = todos
    }
    // FIXME make this async!
    async createToDo(formData){
        // FIXME make a post request to the sandbox api here before you try to create a ToDo class, make sure to include your formdata in the request body
        // FIXME create a Todo with your response data, and push it into the AppState
        const newToDo = new ToDo(formData)
        console.log('New ToDo:', newToDo)
        AppState.toDos.push(newToDo)
    }
    // FIXME make this async!
    async deleteToDo(toDoId){
        // FIXME before you splice, make your delete request to the sandbox api. Make sure you include your todo id in the request url


        const indexToRemove = AppState.toDos.findIndex(toDo => toDo.id == toDoId)
        if(indexToRemove > -1){
            AppState.toDos.splice(indexToRemove,1)
            saveState('toDos', AppState.toDos)
            this.saveToDo()
        }
    }
}

export const toDoService = new ToDoService()
