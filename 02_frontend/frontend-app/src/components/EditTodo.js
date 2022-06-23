import React, {useState} from 'react';

export default function EditTodo({valueEditTodo, toEdit}) {
    const [editValue, setEditValue] = useState('');
    const handlSubmit = e => {
        e.preventDefault();
        toEdit(editValue);
        setEditValue('');
    }
    return (
        <div>
            <form onSubmit={handlSubmit}>
                <input
                    className="input"
                    value={editValue}
                    placeholder="type to edit.."
                    onChange={(e) => setEditValue(e.target.value)}
                />
            </form>
            {console.log('editValue: ', editValue)}
        </div>
    )
}