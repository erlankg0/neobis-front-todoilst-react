import ToDoItem from "../../compoents/toDoItem/toDoItem.tsx";
import styles from './toDoList.module.css';
import {useAddDispatch, useAppSelector} from "../../hooks.ts";
import {useState} from "react";
import {RadioChangeEvent} from "antd";

const ToDoList = () => {
    const todos = useAppSelector(state => state.list);
    const [radio, setRadio] = useState(null);
    const handleOnChangeRadio = (event: RadioChangeEvent) => {
        setRadio(event.target.value);
    }
    const dispatch = useAddDispatch();


    return (
        <div className={styles.toDoList}>
            <h2>To Do List</h2>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} {...todo}/>
            ))}
        </div>
    )
}

export default ToDoList;