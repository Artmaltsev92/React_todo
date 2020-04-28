import React from 'react'
import { TodoItem } from '../TodoItem'

export const TodoList = (props) => {

    return (
        <table className="table" style={{width:'40%', margin:'0 auto'}}> 
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Done</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => {
                    return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} />
                })}
            </tbody>
        </table>
    )
}