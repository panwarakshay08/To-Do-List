import React, { useState } from 'react';
import './Todo.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const AddTodo = () => {
        if (inputValue) {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const DeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const CompleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const EditTodo = (index) => {
        const newTodos = [...todos];
        const editedTodo = prompt('Edit Todo:', newTodos[index].text);
        if (editedTodo !== null) {
            newTodos[index].text = editedTodo;
            setTodos(newTodos);
        }
    };

    return (
        <div className="App">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3 class="animate-character"> To-Do List ! </h3>
                    </div>
                </div>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Add todo task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="mainB" onClick={AddTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                        <span>{todo.text}</span>
                        <div>
                            <button onClick={() => EditTodo(index)}> <i className="fas fa-edit"> </i> </button>
                            <button onClick={() => CompleteTodo(index)}> <i class="fa fa-check" aria-hidden="true"></i> </button>
                            <button onClick={() => DeleteTodo(index)}> <i className="fas fa-trash"></i>  </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default App;
