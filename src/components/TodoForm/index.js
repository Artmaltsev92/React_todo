import React, {useState} from 'react';

const styles = {
    width: '20%',
    marginLeft: '2rem'
}

// обработка нажатия на Enter


// props
export const TodoForm = (props) => {
    const keyPressHandler = (e) => {
        if(e.key === 'Enter') {
            props.AddTodo(e.target.value)
        }
    }

    return(
        <div className="input-group" style={styles}>
            <div className="input-group-prepend">
                <span className="input-group-text">Todo:</span>
            </div>
            <input type="text" className="form-control" onKeyPress={keyPressHandler} />
        </div>
    )
}
