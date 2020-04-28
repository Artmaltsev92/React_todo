import React, {useState} from 'react';
import Header from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export default function App () {
    const [todos, setTodos] = useState(
        [
            {id:1, task:'task1', done:false},
            {id:2, task:'task2', done:true},
            {id:3, task:'task3', done:false}
        ]
    )

    // добавить функцию по созданию todo
    
    // добавить функцию по удалению todo
    
    const AddTodoRow = (todoTask) => {
        setTodos(...todos, {id: Date.now(), task: todoTask, done:false})
    }

    const ToggleCheckbox = (id) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.done = !todo.done
            }
            return todo
        })
        setTodos(newTodos)
    }

    return (
        <>
            <div className="container-fluid">
                <Header />
                <br/>
                <TodoForm AddTodo={AddTodoRow}/>
                <br/>
                <TodoList todos={todos} onToggle={ToggleCheckbox} />
            </div>
        </>
    )
}
