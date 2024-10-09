import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import {todoStore} from "../stores/TodoStore";
import "../style/TodoList.css";

import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";

const TodoList = observer(() => {
    const [highlightMode, setHighlightMode] = useState(null);

    // четность и нечетность с точки зрения пользователя
    const isHighlighted = (index) => {
        if (highlightMode === "even") {
            return index % 2 !== 0;
        } else if (highlightMode === "odd") {
            return index % 2 === 0;
        }
        return false;
    };

    return (
        <div className='todo-list-wrapper'>
            <h1>Todo List</h1>
            <AddTodoForm/>

            <ul className='todo-list'>
                {todoStore.todos.map((task, index) => (
                    <TodoItem task={task} key={task.id} isHighlighted={isHighlighted(index)} isEven={index % 2 === 0}/>
                ))}
            </ul>

            <div className="button-container">
                <button className="button" onClick={() => setHighlightMode("even")}>Выделение четных элементов</button>
                <button className="button" onClick={() => setHighlightMode("odd")}>Выделение нечетных элементов</button>
                <button className="button" onClick={() => setHighlightMode(null)}>Очистить выделение элементов</button>
                <button className="button" onClick={() => todoStore.removeLastTodoItem()}>Удаление последнего елемента
                </button>
                <button className="button" onClick={() => todoStore.removeFirstTodoItem()}>Удаление первого элемента
                </button>
            </div>
        </div>
    );
});

export default TodoList;
