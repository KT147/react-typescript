import { useRef } from "react";


const NewTodo: React.FC<{onAddTodo: }> = (props) => {

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
    <form onSubmit={sumbitHandler}>
      <label htmlFor="text"></label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
