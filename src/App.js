import React, {useState} from 'react';
import Header from './components/Header';
import { AddToDo } from './components/TodoForm/index';
import { TodoList } from './components/TodoList';
import Context from './components/context';
import {Counter} from './components/Counter'


const styles = {
    allCompleted: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '16rem',
        textAlign: 'center',
        fontSize: '24px',
        opacity: '50%',
        paddingTop:'10rem',
        color: 'grey',
    },
    done: {
        textDecoration: 'line-through',
        color: 'green'
    }
}


export default function App () {
    const [todos, setTodos] = useState(
        [
            {id:1, task:'task1', done:false},
            {id:2, task:'task2', done:true},
            {id:3, task:'task3', done:false}
        ]
    )

    function addTodo(task) {
        setTodos(todos.concat([{
        id: Date.now(),
        task,
        done:false
    
        }]))
      }


    // добавить функцию по созданию todo


    const ToggleCheckbox = (id) => {
        const newTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.done = !todo.done
            }
            return todo
        })
        setTodos(newTodos)
    }


    function removeTodo(id) {
        setTodos(todos.filter(todo=> todo.id!==id))
      }

    console.log(todos)
    return (
        <Context.Provider value={{ removeTodo }}>
        <div>
            <div className="container-fluid">
                <Header />
                <br/>
                <AddToDo onCreate={addTodo}/>
                <br/>
    {todos.length ? <TodoList todos={todos} onToggle={ToggleCheckbox} />: <span style={styles.allCompleted}>На текущий момент все!</span> }
            
            </div>
        </div>
        </Context.Provider>
    )
}
