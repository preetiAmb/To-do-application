const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

app.post('/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: uuidv4(), title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const { title, completed } = req.body;
  const todoIndex = findTodoIndex(todoId);

  if (todoIndex !== -1) {
    todos[todoIndex].title = title || todos[todoIndex].title;
    todos[todoIndex].completed = completed || todos[todoIndex].completed;
    res.json(todos[todoIndex]);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.delete('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const todoIndex = findTodoIndex(todoId);

  if (todoIndex !== -1) {
    const deletedTodo = todos.splice(todoIndex, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

function findTodoIndex(todoId) {
  return todos.findIndex((todo) => todo.id === todoId);
}

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
