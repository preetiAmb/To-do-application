import { createContext, useState, useEffect } from 'react';
import { getAllTodos, addTodo as addTodoAPI, updateTodo as updateTodoAPI, deleteTodo as deleteTodoAPI } from '@/api';
import { ITask } from '@/types/tasks';

interface ToDoContextType {
  todos: ITask[];
  addTodo: (newTodo: ITask) => Promise<void>;
  updateTodo: (updatedTodo: ITask) => Promise<void>;
  deleteTodo: (todoId: string) => Promise<void>;
  handleUpdateTodoText: (todoId: string, newText: string) => void;
  handleUpdateTodoCompletion: (todoId: string, completed: boolean) => Promise<void>;
}

export const ToDoContext = createContext<ToDoContextType>({
    todos: [],
    addTodo: () => Promise.resolve(),
    updateTodo: () => Promise.resolve(),
    deleteTodo: () => Promise.resolve(),
    handleUpdateTodoText: () => {},
    handleUpdateTodoCompletion: () => Promise.resolve(),
  });

export const ToDoContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [todos, setTodos] = useState<ITask[]>([]);
  
    useEffect(() => {
      fetchTodos();
    }, []);
  
    const fetchTodos = async () => {
      try {
        const todos = await getAllTodos();
        setTodos(todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
  
    const addTodo = async (newTodo: ITask) => {
      try {
        const addedTodo = await addTodoAPI(newTodo);
        setTodos((prevTodos) => [...prevTodos, addedTodo]);
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    };
  
    const updateTodo = async (updatedTodo: ITask) => {
      try {
        await updateTodoAPI(updatedTodo);
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
        );
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };
  
    const deleteTodo = async (todoId: string) => {
      try {
        await deleteTodoAPI(todoId);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    };
  
    const handleUpdateTodoText = (todoId: string, newText: string) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, title: newText };
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  
    const handleUpdateTodoCompletion = async (todoId: string, completed: boolean) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed };
        }
        return todo;
      });
      setTodos(updatedTodos);
  
      const updatedTodo = updatedTodos.find((todo) => todo.id === todoId);
      if (updatedTodo) {
        await updateTodoAPI(updatedTodo);
      }
    };
  
    return (
      <ToDoContext.Provider
        value={{
          todos,
          addTodo,
          updateTodo,
          deleteTodo,
          handleUpdateTodoText,
          handleUpdateTodoCompletion,
        }}
      >
        {children}
      </ToDoContext.Provider>
    );
  };
  