export interface TodoItem {
    text: string;
    status: "Pending" | "Done" 
}

export const todos: TodoItem[] = [
    {
        text: "Ir a comprar",
        "status": "Pending"
    },
    {
        text: "Ir a dormir",
        "status": "Done"
    }
]