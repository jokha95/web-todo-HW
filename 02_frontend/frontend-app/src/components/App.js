// import React from "react";
// import CreateProduct from "./CreateProduct";
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: []
//         };
//         fetch('http://localhost:8080/products')
//             .then(response => response.json())
//             .then((response) => {
//                 this.setState({products: response});
//             });
//     }
//
//     render() {
//         return (
//             <div className="app">
//                 <ul className="products">
//                     {this.state.products.map(product => <li key={product.id}>{product.name}</li>)}
//                 </ul>
//                 <CreateProduct></CreateProduct>
//             </div>
//         );
//     }
// }
//
// export default App


import React, { useState } from "react";
import "../index.css";
import SearchBar from "./SearchBar";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";

// import TodoList from "./Component/TodoList";
// import AddTodo from "./Component/AddTodo";
// import SearchBar from "./Component/SearchBar";
// import EditTodo from "./Component/EditTodo";

function DisplayImage(props) {
    return null;
}

function App() {
    ///-------- State --------///
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Attend class",
            isComplete: false
        }
    ]);
    const [word, setWord] = useState("");
    const [url, setUrl] = useState("");
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
    const toUrlImage = (urlImage) => {
        setUrl(urlImage);
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
                            toUrlImage={toUrlImage}
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
