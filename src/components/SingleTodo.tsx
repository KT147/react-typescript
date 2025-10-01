import styles from './SingleTodo.module.css'

const SingleTodo: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {


  return (
    <li onClick={props.onRemoveTodo} className={styles.item}>{props.text}</li>
  )
}

export default SingleTodo