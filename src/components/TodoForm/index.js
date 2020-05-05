import React, {useState} from 'react';

const styles = {
    width: '20%',
    marginLeft: '2rem'
}




// обработка нажатия на Enter


// props

export function AddToDo({onCreate}) {
    const [value,setValue] = useState('')
    function submitHandler(event) {
        event.preventDefault()
    if (value.trim()) {
        onCreate(value)
        setValue('')
        
    }

    }
    return(
        <div className="input-group" style={styles}>
            <div className="input-group-prepend">
                <span className="input-group-text">Todo:</span>
            </div>
            <form onSubmit={submitHandler}><input type="text" placeholder ='Что нужно сделать?' className="form-control" value={value} onChange = {event=>setValue(event.target.value)} /></form>
        </div>
    )
    
}



