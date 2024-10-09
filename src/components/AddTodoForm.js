import addIcon from "../svg/add.svg";
import React, { useState } from "react";
import { todoStore } from "../stores/TodoStore";

const AddTodoForm = () => {
    const [task, setTask] = useState("");

    const handleAddTodo = () => {
        if (task.trim() === "") {
            alert("Задача не может быть пустой!");
            return;
        }
        todoStore.addTodoItem(task);
        setTask("");
    };

    return (
        <div className='add-task-wrapper'>

            <input
                className='add-task-input'
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Добавить задачу"
            />

            <button className='button button-margin' onClick={handleAddTodo}>
                <img src={addIcon} alt="Add" style={{width: '20px', height: '20px'}}/>
            </button>
        </div>
    )
}
export default AddTodoForm;