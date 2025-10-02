import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  // const [todos, setTodos] =  useState<Todo[]>([])

  // function addTodoHandler(todoText: string) {
  //   const newTodo = new Todo(todoText)
  //   setTodos((prevState) => {
  //     return prevState.concat(newTodo)
  //   })
  // }

  // function removeTodoHandler(todoId: string) {
  //   setTodos((prevState) => {
  //     return prevState.filter(todo => todo.id !== todoId)
  //   })
  // }

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
