

import React, { useState } from "react";
import "../index.css";
import SearchBar from "./SearchBar";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";


function constructor(props) {
    this.state = {
        tasks: []
    };
    fetch('http://localhost:8080/tasks')
        .then(response => response.json())
        .then((response) => {
            this.setState({ tasks: response });

        });
}

function deleteTask(id) {

    fetch('http://localhost:8080/tasks/'+id, {method: 'Delete'})
        .then((response=> console.log(response))

        )
}


const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Attend class",
            isComplete: false
        }
    ]);
    const [word, setWord] = useState("");
    const [editTodoObj, setEditTodoObj] = useState({});
    const [indexEdit, setIndexEdit] = useState(-1);
    ///-------- Handle Function --------///
    const isComplete = (index) => {
        const newtodo = [...todos];
        newtodo[index].isComplete = true;
        setTodos(newtodo);
    };
    const toRemove = (index) => {
        const newtodo = [...todos];
        newtodo.splice(index, 1);
        setTodos(newtodo);
    };
    const toAdd = (text) => {
        const newtodo = [
            ...todos,
            {
                id: todos.length + 1,
                text: text,
                isComplete: false,
                linkPic: ""
            }
        ];
        setTodos(newtodo);
    };
    const toSearch = (searchValue) => {
        setWord(searchValue);
    };
    const takeEditObj = (todo) => {
        setEditTodoObj(todo);
    };
    const toIndexEdit = (idx) => {
        setIndexEdit(idx);
    };
    const toEdit = (content) => {
        console.log("editTodoObj:", editTodoObj.id, editTodoObj);
        console.log("index:", indexEdit);
        console.log("content:", content);
        const newtodo = [...todos];
        console.log("newton", newtodo);
        newtodo[indexEdit].text = content;
        setTodos(newtodo);
        setIndexEdit(-1);
    };
    ///-------- Return App --------///
    return (
        <div className="app">
            <div className="header">
                <p>My -To-Do</p>
            </div>
            <div className="todo-list">
                <SearchBar toSearch={toSearch} />
                {todos
                    .filter((todo) => {
                        if (!word || word.length < 1) {
                            return true;
                        }
                        return todo.text.toLowerCase().includes(word);
                    })
                    .map((todo, index) => (
                        <TodoList
                            key={index}
                            index={index}
                            todo={todo}
                            isComplete={isComplete}
                            toRemove={toRemove}
                            toEdit={takeEditObj}
                            toIndexEdit={toIndexEdit}
                        />
                    ))}
                <AddTodo toAdd={toAdd} />
                <div className="todo-list">
                    {indexEdit !== -1 ? (
                        <EditTodo valueEditTodo={takeEditObj} toEdit={toEdit} />
                    ) : (
                        ""
                    )}
                    {console.log("indexEdit:", indexEdit)}
                </div>
            </div>
        </div>
    );
}
export default App;