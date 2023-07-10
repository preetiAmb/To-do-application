import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Index: React.FC = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Index;
