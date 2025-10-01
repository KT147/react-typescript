import { useRef } from "react";
import styles from './NewTodo.module.css'



const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null)

    function sumbitHandler(event: React.FormEvent) {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value
        //hüümärk ütleb, et väärtus pole kunagi null.

        if (enteredText.trim().length === 0) {
            return
        }

        props.onAddTodo(enteredText)

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
