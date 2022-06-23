import React, {useState} from "react";

export default function AddTodo({toAdd}) {
    const [valueText, setValueText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        toAdd(valueText);
        setValueText('');

    }
    return (
        <div> {console.log('valueText: ', valueText)}
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    placeholder="Add Task.."
                    value={valueText}
                    onChange={(e) => setValueText(e.target.value)}
                />
            </form>
        </div>
    )
}