import React from 'react'

const Todo = props => {
    return (
        <div 
            onClick={e => props.toggleTodo(props.item.id)}
        >
            {props.item.task}
        </div>
    )
} 

export default Todo