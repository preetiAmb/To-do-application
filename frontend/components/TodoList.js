import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from '@mui/system';

const RootContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#ffffff',
  borderRadius: theme.spacing(1),
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
}));


const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTodo,
          description: "",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTodos([...todos, data]);
          setNewTodo("");
        })
        .catch((error) => console.error(error));
    }
  };

  const handleRemoveTodo = (id) => {
    fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: true,
      }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }
          return todo;
        });
        setTodos(updatedTodos);
      })
      .catch((error) => console.error(error));
  };

  return (
    <RootContainer maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Todo List
      </Typography>
      <TextField
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        fullWidth
        label="New Todo"
        sx={{ marginBottom: '16px' }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} disablePadding>
            <ListItemText primary={todo.title} sx={{ marginRight: '16px', marginTop: '16px' }}/>
            {!todo.completed && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveTodo(todo.id)}
              >
                Complete
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </RootContainer>
  );
};

export default HomePage;
