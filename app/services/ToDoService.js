import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { saveState } from "../utils/Store.js";
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
        const response = await fetch('api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData, completed: false }),
        })
        if (!response.ok) {
            throw new Error(`Failed to create ToDo: ${response.status} ${response.statusText}`)
        }
        const responseData = await response.json();
        const newToDo = new ToDo(responseData)
        console.log('New ToDo:', newToDo)
        AppState.toDos.push(newToDo)
    }
    async deleteToDo(toDoId){
        const response = await fetch(`api/todos/${toDoId}`,{
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
    async toggleCompleted(toDoId) {
        let foundToDo = AppState.toDos.find(toDo => toDo.id == toDoId)
        foundToDo.completed = !foundToDo.completed
        const response = await api.put(`api/todos/${toDoId}`, foundToDo)
        console.log('please work', response.data)
        AppState.emit('toDos')
    }
    
}

export const toDoService = new ToDoService()
