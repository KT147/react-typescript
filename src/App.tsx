import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] =  useState<Todo[]>([])

  function addTodoHandler(todoText: string) {
    const newTodo = new Todo(todoText)
    setTodos((prevState) => {
      return prevState.concat(newTodo)
    })
  }

  
  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
