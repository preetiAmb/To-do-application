import { useState, useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';
import { ITask } from '../types/tasks';
import { v4 as uuidv4 } from 'uuid';

const TodoForm: React.FC = () => {
  const { addTodo } = useContext(ToDoContext);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === '') {
      return;
    }
    const newTask: ITask = { id: uuidv4(), title: newTodo, completed: false };
    addTodo(newTask);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
