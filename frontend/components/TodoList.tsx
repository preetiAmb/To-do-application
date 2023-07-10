import { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';
import { ITask } from '@/types/tasks';
import router from 'next/router';

interface TodoListProps {
  todos: ITask[];
}

const TodoList: React.FC = () => {
  const { todos, updateTodo, handleUpdateTodoText, handleUpdateTodoCompletion, deleteTodo } = useContext(ToDoContext);

  const handleSaveTodo = (todoId: string) => {
    const updatedTodo = todos.find((todo) => todo.id === todoId);
    if (updatedTodo) {
      updateTodo({
        id: updatedTodo.id,
        title: updatedTodo.title,
        completed: updatedTodo.completed,
      });
    }
    router.reload();
  };
  
  const handleDeleteTodo = (todoId: string) => {
    deleteTodo(todoId)
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.title}
              onChange={(e) => handleUpdateTodoText(todo.id, e.target.value)}
            />
            <button onClick={() => handleUpdateTodoCompletion(todo.id, !todo.completed)}>
              {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => handleSaveTodo(todo.id)}>Save</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
