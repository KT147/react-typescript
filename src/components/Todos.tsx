import React from "react"
import Todo from "../models/todo"
import SingleTodo from "./SingleTodo"
import styles from './Todos.module.css'


const Todos: React.FC<{items: Todo[], onRemoveTodo: (id: string) => void}> = (props) => {


  return (
    
    <ul className={styles.todos}>
      {props.items.map(item =>
        <SingleTodo onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} key={item.id} text={item.text} />
      )}
    </ul>
  )
}

export default Todos