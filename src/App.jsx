import { useState } from 'react'

import './App.css'



function App() {
    // TodoApp component
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [time, setTime] = useState('');

    const handleAddTodo = () => { // Add todo function
        setTodos([...todos, { todo, time }]);
        setTodo('');
        setTime('');
    }


    const handleRemoveTodo = (index) => {
        const newTodos = [...todos]; // Copy todos
        newTodos.splice(index,1); // Remove todo
        setTodos(newTodos); // Update todos
    };


    return (
        <div>
            <h1>Todo List</h1>
            <input type='text' placeholder='task' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <input type='text' placeholder='time' value={time} onChange={(e) => setTime(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input type='checkbox'
                               onClick={() => handleRemoveTodo(index)} />
                        {todo.todo} - {todo.time}
                    </li>
                ))}

            </ul>

        </div>
    )
}



export default App
