import {makeAutoObservable} from "mobx";

class TodoStore {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodoItem(title) {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false,
        };
        this.todos.push(newTodo);
    }

    removeTodoItem(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    completeTodoItem(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            if (todo.completed) {
                this.todos = this.todos.filter(t => t.id !== id);
                this.todos.push(todo);
            }
        }
    }

    updateTodoItem(id, newTitle) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.title = newTitle;
        }
    }

    removeLastTodoItem() {
        if (this.todos.length > 0) {
            this.todos.pop();
        }
    }

    removeFirstTodoItem() {
        if (this.todos.length > 0) {
            this.todos.shift();
        }
    }
}

export const todoStore = new TodoStore();
