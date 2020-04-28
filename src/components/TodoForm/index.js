import React from 'react';

const styles = {
    width: '20%',
    marginLeft: '2rem'
}

// обработка нажатия на Enter

// props
export const TodoForm = () => {
    return(
        <div className="input-group" style={styles}>
            <div className="input-group-prepend">
                <span className="input-group-text">Todo:</span>
            </div>
            <input type="text" className="form-control" />
        </div>
    )
}
