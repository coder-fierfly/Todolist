import addIcon from "../svg/add.svg";
import React, { useState } from "react";
import { todoStore } from "../stores/TodoStore";

const AddTodoForm = () => {
    const [task, setTask] = useState("");
    const handleAddTodo = (e) => {
        todoStore.addTodoItem(task);
        setTask("");
    };
    return (
        <>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Добавить задачу"
            />
            <button className='button' onClick={handleAddTodo}>
                <img src={addIcon} alt="Add" style={{width: '20px', height: '20px'}}/>
            </button>
        </>
    )
}
export default AddTodoForm;