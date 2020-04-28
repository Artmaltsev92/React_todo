import React from 'react'

const styles = {
    button : {
        borderRadius: '30%'
    }
}

export const TodoItem = (props) => {
    return (
        <tr>
            <td>{props.todo.task}</td>
            <td><input type="checkbox" checked={props.todo.done} onChange={() => props.onChange(props.todo.id)}/></td>
            <td><button className="btn btn-danger" style={styles.button}>&times;</button></td>
        </tr>
    )
}