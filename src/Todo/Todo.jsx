
import  { useState } from 'react';
import './Todo.css';
function Todo() {

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

    const todoCount = todos.length;

    return (
        <div>
            <h1>Todo List 📝</h1>
            <input type='text' placeholder='Task' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <input type='time' placeholder='time' value={time} onChange={(e) => setTime(e.target.value)} />
            <input type='date' placeholder='date' value={time} onChange={(e) => setTime(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <div className='list' key={index}>
                        <input type='checkbox'
                               onClick={() => handleRemoveTodo(index)} />
                        {todo.todo} - {todo.time} - {todo.date}
                    </div>
                ))}
            </ul>
            <p>Total Tasks: {todoCount}</p>
        </div>
  );
}

export default Todo;