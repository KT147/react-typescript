import { useContext, useRef } from "react";
import styles from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";



const NewTodo: React.FC = () => {

  const todosCtx = useContext(TodosContext)

    const todoTextInputRef = useRef<HTMLInputElement>(null)

    function sumbitHandler(event: React.FormEvent) {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value
        //hüümärk ütleb, et väärtus pole kunagi null.

        if (enteredText.trim().length === 0) {
            return
        }

        todosCtx.addTodo(enteredText)

    }

  return (
    <form className={styles.form} onSubmit={sumbitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
