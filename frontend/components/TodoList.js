import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8000/todos");
      const todos = await response.json();
      setTodos(todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = async () => {
    if (inputValue.trim() !== "") {
      try {
        const response = await fetch("http://localhost:8000/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: inputValue }),
        });
        const newTodo = await response.json();
        setTodos([...todos, newTodo]);
        setInputValue("");
      } catch (error) {
        console.error("Error creating todo:", error);
      }
    }
  };

  const handleUpdateTodo = async (todoId, completed) => {
    try {
      await fetch(`http://localhost:8000/todos/${todoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed }),
      });
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed } : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      await fetch(`http://localhost:8000/todos/${todoId}`, {
        method: "DELETE",
      });
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button
                onClick={() => handleUpdateTodo(todo.id, !todo.completed)}
              >
                {todo.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
