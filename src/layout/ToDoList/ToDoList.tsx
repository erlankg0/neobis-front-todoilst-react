import ToDoItem from "../../compoents/toDoItem/toDoItem.tsx";
import styles from './toDoList.module.css';

const ToDoList = () => {
    return (
        <div className={styles.toDoList}>
            <h2>To Do List</h2>
            <ToDoItem/>
        </div>
    )
}

export default ToDoList;