import { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';
import router from 'next/router';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

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
    <>
     
     <Box display="flex" flexDirection="column" alignItems="center">
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <TextField
            type="text"
            value={todo.title}
            onChange={(e) => handleUpdateTodoText(todo.id, e.target.value)}
          />
          <IconButton
            onClick={() => handleUpdateTodoCompletion(todo.id, !todo.completed)}
          >
            {todo.completed ? <CheckIcon /> : <ClearIcon />}
          </IconButton>
          <IconButton onClick={() => handleSaveTodo(todo.id)}>
            <SaveIcon />
          </IconButton>
          <IconButton onClick={() => handleDeleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </Box>
     
    </>
  );
};

export default TodoList;
