import React from "react"
import Todo from "../models/todo"
import SingleTodo from "./SingleTodo"


const Todos: React.FC<{items: Todo[]}> = (props) => {

  return (
    
    <ul>
      {props.items.map(item =>
        <SingleTodo key={item.id} text={item.text}/>
      )}
    </ul>
  )
}

export default Todos