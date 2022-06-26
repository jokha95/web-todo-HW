import React from "react";

export default function TodoList({index, todo, isComplete, toRemove, toEdit, toIndexEdit}) {
    return (
        <div className="todo">
            <div style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>
                <div className="hover" > {todo.text}</div>
            </div>
            {console.log('isComplete: ', todo)}
            <div>
                <button className="button" onClick={() => {
                    isComplete(index)
                }}>Complete
                </button>
                <button className="button" onClick={() => {
                    toRemove(index)
                }}>Remove
                </button>
                <button className="button" onClick={() => {
                    toEdit(todo)
                    toIndexEdit(index)
                }}>Edit
                </button>
            </div>
        </div>
    )
}