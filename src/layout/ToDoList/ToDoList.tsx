import ToDoItem from "../../compoents/toDoItem/toDoItem.tsx";
import {useAppSelector} from "../../hooks.ts";
import  './toDoList.css'
const ToDoList = () => {
    const todos = useAppSelector(state => state.todos.list);

    return (
        <div className={'toDoList'}>
            <h2>To Do List</h2>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} {...todo}/>
            ))}
        </div>
    )
}

export default ToDoList;