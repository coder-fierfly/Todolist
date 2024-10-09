import editIcon from "../svg/edit.svg";
import deleteIcon from "../svg/delete.svg";
import saveIcon from "../svg/save.svg";
import {todoStore} from "../stores/TodoStore";
import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import "../style/TodoList.css";

const TodoItem = observer(({task, isHighlighted, isEven}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const backgroundColor = isHighlighted
        ? isEven ? "lightblue" : "lightgray"
        : "transparent";

    const handleSaveChange = () => {
        todoStore.updateTodoItem(task.id, newTitle);
        setIsEditing(false);
    };

    const handleComplete = () => {
        if (isEditing) {
            alert("Задача в режиме редактирования. Сначала сохраните изменения.");
        } else {
            todoStore.completeTodoItem(task.id);
        }
    };

    return (
        <li key={task.id} style={{backgroundColor}}>

            {isEditing ? (
                <>
                    <input className='half-input'
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button className="button" onClick={handleSaveChange}>
                        <img src={saveIcon} alt="Save"/>
                    </button>
                </>
            ) : (
                <>
                    <span className='half-input'>{task.completed ? <strike>{task.title}</strike> : task.title}</span>
                    <button className="button" disabled={task.completed} onClick={() => setIsEditing(true)}>
                        <img src={editIcon} alt="Edit"/>
                    </button>
                </>
            )}

            <button className='button' onClick={() => todoStore.removeTodoItem(task.id)}>
                <img src={deleteIcon} alt="Delete"/>
            </button>
            {!task.completed && (
                <button className="button" onClick={handleComplete}>
                    Complete
                </button>
            )}
        </li>
    );
});
export default TodoItem;