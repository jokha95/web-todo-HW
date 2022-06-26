import React, {useState} from "react";

export default function AddTodo({toAdd}) {
    const [valueText, setValueText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        toAdd(valueText);
        setValueText('');

        fetch('http://localhost:8080/tasks',
            {
                method: 'POST',
                // body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => console.log(response));


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