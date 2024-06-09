
import  { useState } from 'react';
import './Todo.css';
function Todo() {

    // TodoApp component
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const handleAddTodo = () => { // Add todo function
        setTodos([...todos, { todo, time, date }]);
        setTodo('');
        setTime('');
        setDate('')
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
            <input type='text' placeholder='My Task' onChange={(e) => setTodo(e.target.value)} />
            <input type='time' value={time} onChange={(e) => setTime(e.target.value)} />
            <input type='date' value={date} onChange={(e) => setTime(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <div className='list' key={index}>
                        <input type='checkbox'
                               onClick={() => handleRemoveTodo(index)} />
                        {todo.todo} - {todo.time} on {todo.date}
                    </div>
                ))}
            </ul>
            <p>Total Tasks: {todoCount}</p>
        </div>
  );
}

export default Todo;