import { ITask } from "../frontend/types/tasks";
const baseUrl = 'http://localhost:8000/todos';

export const getAllTodos = async () => {
    const res = await fetch(`${baseUrl}`, {cache: 'no-store' });
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      })
      const newTodo = await res.json();
      return newTodo;
}

export const updateTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
    const updatedTodo = await res.json();
    return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
}