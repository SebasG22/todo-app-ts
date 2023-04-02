import './style.css';
import { renderTodoList } from './todo-list';
import { todos } from './todo-data';
import { renderForm } from './todo-form';

document.querySelector("#app")!.innerHTML = `
<h1 class="toDoList">TO-DO LIST</h1>

<div id="todo-list"> </div>
<div id="todo-form"> </div>
<div class="allNotes">
    <ul class="noteList">
        aqui va una nota
    </ul>
    <button class="doneNote">Done</button>
    <button class="removeNote">Remove</button>
</div>`

const elementTodoList = document.querySelector('#todo-list') as any;
const elementPositionForm = document.querySelector('#todo-form') as any;

renderTodoList(elementTodoList, todos)
renderForm(elementPositionForm)