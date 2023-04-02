import { TodoItem } from "./todo-data";

export function renderTodoList(element: HTMLElement, todos: TodoItem[]){
    element.innerHTML = "";
    todos.forEach((todo)=>{
        const node = document.createElement('div');
        node.innerHTML = `<p class="todo-item">${todo.text} - ${todo.status}</p>`
        element.appendChild(node);
    })    
}