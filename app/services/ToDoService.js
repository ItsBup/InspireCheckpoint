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
    async createToDo(formData){
        // FIXME make a post request to the sandbox api here before you try to create a ToDo class, make sure to include your formdata in the request body
        const response = await fetch('api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        if (!response.ok) {
            throw new Error(`Failed to create ToDo: ${response.status} ${response.statusText}`)
        }
        const responseData = await response.json();
        // FIXME create a Todo with your response data, and push it into the AppState
        const newToDo = new ToDo(responseData)
        console.log('New ToDo:', newToDo)
        AppState.toDos.push(newToDo)
    }
    async deleteToDo(toDoId){
        // FIXME before you splice, make your delete request to the sandbox api. Make sure you include your todo id in the request url
        const response = await fetch('api/todos/${toDoId}',{
            method: 'DELETE'
        })
        if (!response.ok) {
            throw new Error(`Failed to delete ToDo: ${response.status} ${response.statusText}`)
        }
        const indexToRemove = AppState.toDos.findIndex(toDo => toDo.id == toDoId)
        if(indexToRemove > -1){
            AppState.toDos.splice(indexToRemove,1)
            saveState('toDos', AppState.toDos)
        }
    }
}

export const toDoService = new ToDoService()
