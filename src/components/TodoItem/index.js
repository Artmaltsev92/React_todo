import React, {useContext} from 'react'
import Context from '../context'



const styles = {
    button : {
        borderRadius: '30%'},
    done: {
        textDecoration: 'line-through',
        color: 'green'}
}

export const TodoItem = (props) => {
    const {removeTodo} = useContext(Context)

    return (
        <tr styles = {styles.done}>
            <td>{props.todo.task}</td>
            <td><input type="checkbox" checked={props.todo.done} onChange={() => props.onChange(props.todo.id)}/></td>
            <td><button className="btn btn-danger" onClick={() => removeTodo(props.todo.id)} style={styles.button}>&times;</button></td>
        </tr>
    )
}