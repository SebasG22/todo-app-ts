import { todos } from "./todo-data";
import { renderTodoList } from "./todo-list";

export function renderForm(element: HTMLElement){
    const btnAdd = document.createElement('button');

    btnAdd.textContent = "Add New Note";

    btnAdd.addEventListener("click", ()=>{
        const writeNoteInput = document.querySelector("#writeNote") as HTMLInputElement;
        todos.push({
            text: writeNoteInput.value,
            status: "Pending"
        });
        const elementTodoList = document.querySelector('#todo-list') as any;

        renderTodoList(elementTodoList, todos);
    })

    element.innerHTML = `
    <input type="text" id="writeNote" placeholder="write your note">`;

    element.appendChild(btnAdd);


}