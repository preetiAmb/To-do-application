import { useState, useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';
import { ITask } from '../types/tasks';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Box, FormControl } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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
    <Container maxWidth="sm">
   
      <form onSubmit={handleAddTodo}>
      <FormControl fullWidth={true}>
        <TextField
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          sx={{ marginRight: 2 }}
        />
        <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              style={{ marginTop: 5 }}
              type="submit"
              color="primary"
              size="large"
            >
              Add
            </Button>
          </Box>
        </FormControl>
      </form>
   
    </Container>
  );
};

export default TodoForm;
