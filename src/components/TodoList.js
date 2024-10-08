import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import {todoStore} from "../stores/TodoStore";
import "../style/TodoList.css";

import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

const TodoList = observer(() => {
    const [highlightMode, setHighlightMode] = useState(null);

    const isHighlighted = (index) => {
        if (highlightMode === "even" && index % 2 === 0) {
            return true;
        } else if (highlightMode === "odd" && index % 2 !== 0) {
            return true;
        }
        return false;
    };
    return (
        <div>
            <h1>Todo List</h1>
            <AddTodoForm/>

            <ul className='todo-list'>
                {todoStore.todos.map((task, index) => (
                    <TodoItem task={task} key={task.id} isHighlighted={isHighlighted(index)} isEven={index % 2 === 0}/>
                ))}
            </ul>

            <button className="button" onClick={() => setHighlightMode("even")}>Highlight Even Items</button>
            <button className="button" onClick={() => setHighlightMode("odd")}>Highlight Odd Items</button>
            <button className="button" onClick={() => setHighlightMode(null)}>Clear Highlights</button>
            <button className="button" onClick={() => todoStore.removeLastTodoItem()}>Remove Last Item</button>
            <button className="button" onClick={() => todoStore.removeFirstTodoItem()}>Remove First Item</button>
        </div>
    );
});

export default TodoList;
