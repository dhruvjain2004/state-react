import { useState } from "react"

export default function ToDoList(){
    let [todos, setTodos] = useState(["sample task 1", "sample task 2", "sample task 3"]);
    return (
        <div>
            <input type="text" placeholder="add a task"/>
            <br />
            <button>Add Task</button>
            <br />
            <br />
            <br />
            <h1>To Do List</h1>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
        </div>
    )
}
