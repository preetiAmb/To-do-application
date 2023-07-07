import { Box } from '@mui/material';

import TodoList from '../components/TodoList';

const HomePage = () => {
  return  (
  <Box maxWidth={400} mx="auto" mt={4} p={2}>
    {/* <TodoForm /> */}
    <TodoList />
  </Box>
);
};

export default HomePage;
