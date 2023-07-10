import { Box } from '@mui/material';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Index: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth="md"
      mx="auto"
      mt={4}
    >
      <h1 className='text-2xl font-bold'>Todo List App</h1>
      <TodoForm />
      <TodoList />
    </Box>
  );
};

export default Index;
