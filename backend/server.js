const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let todoItems = [];

app.get('/api/todos', (req, res) => {
  res.json(todoItems);
});

app.post('/api/todos', (req, res) => {
  const { title, description } = req.body;
  const newTodo = { title, description, completed: false };
  todoItems.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const todoIndex = todoItems.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    res.status(404).json({ error: 'Todo not found' });
  } else {
    const updatedTodo = { ...todoItems[todoIndex], title, description, completed };
    todoItems[todoIndex] = updatedTodo;
    res.json(updatedTodo);
  }
});

app.patch('/api/todos/:id/complete', (req, res) => {
  const { id } = req.params;
  const todoIndex = todoItems.findIndex(todo => todo.id === id);
  if (todoIndex === -1) {
    res.status(404).json({ error: 'Todo not found' });
  } else {
    todoItems[todoIndex].completed = true;
    res.json(todoItems[todoIndex]);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
