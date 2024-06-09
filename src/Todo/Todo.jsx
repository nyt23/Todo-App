
import  { useState } from 'react';
import './Todo.css';
function Todo() {


    // TodoApp component
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');


    const handleAddTodo = () => { // Add todo function
        const newTodos = {
            id: Date.now(), // Unique ID
            todo,
            time,
            date,
            completed: false
        };
        setTodos([...todos, newTodos]); // Add todo
        setTodo('');
        setTime('');
        setDate('');

        // setTodos([...todos, { todo, time, date, completed: false }]); // Add todo
        // setTodo('');
        // setTime('');
        // setDate('')
    };

    const handleCompleteTodo = (id) => {
        const index = todos.findIndex((todo) => todo.id === id); // Find todo index
        if (index !== -1) {
            const newTodos = [...todos]; // Copy todos
            newTodos[index].completed = true; // Update todo
            newTodos[index].completedAt = new Date(); // set completedAt date and time
            setTodos(newTodos); // Update todos
        }
    };

    const handleRemoveTodo = (id) => {
        const index = todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
            const newTodos = [...todos]; // Copy todos
            newTodos.splice(index, 1); // Remove todo
            setTodos(newTodos); // Update todos
        }
    };

    const completedTodos = todos.filter((todo) => todo.completed);
    const uncompletedTodos = todos.filter((todo) => !todo.completed);

    const todoCount = completedTodos.length;

    return (
        <div>
            <h1>Todo List 📝</h1>
            <input type='text' placeholder='My Task' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <input type='time' value={time} onChange={(e) => setTime(e.target.value)} />
            <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
            <button className='add-item' onClick={handleAddTodo}>Add</button>
            <h3>Incomplete Tasks</h3>
            <ul>
                {uncompletedTodos.map((task) => (
                    <div className='list-uncompleted' key={task.id}>
                        <span
                            className={todo.completed ? 'todo-item-completed' : 'todo-item'}>  🔘  {task.todo} at {task.time} on {task.date}
                        </span>
                        <div className='button-group'>
                        <button className='completed-button' onClick={() => handleCompleteTodo(task.id)}>✔️</button>
                        <button className='delete-button' onClick={() => handleRemoveTodo(task.id)}>✖️</button>
                        </div>
                    </div>
                ))}
            </ul>
            <h3>Completed Tasks</h3>
            <ul>
                {completedTodos.map((task) => (
                    <div className='list' key={task.id}>
                        <span
                            className={todo.completed ? 'todo-item-completed' : 'todo-item'}>  ✅ {task.todo} at {task.time} on {task.date}  -  Completed at : {task.completedAt.toLocaleString()}
                        </span>
                    </div>

                ))}
            </ul>
            <p>Total Tasks Completed: {todoCount}</p>
        </div>
    );
}

export default Todo;