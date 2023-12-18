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
    createToDo(formData){
        const newToDo = new ToDo(formData)
        console.log('New ToDo:', newToDo)
        AppState.toDos.push(newToDo)
    }
    deleteToDo(toDoId){
        const indexToRemove = AppState.toDos.findIndex(toDo => toDo.id == toDoId)
        if(indexToRemove > -1){
            AppState.toDos.splice(indexToRemove,1)
            saveState('toDos', AppState.toDos)
            this.saveToDo()
        }
    }
}

export const toDoService = new ToDoService()
