import  styles from './form.module.css'
import FormToDo from "../../compoents/form/form.tsx";
import {useAddDispatch} from "../../hooks.ts";
import {addTodo, Category} from "../../redux/toDoSlice.ts";


const FormContainer = () => {
    const dispatch = useAddDispatch();

    const handleAddToDoItem = (title: string, category: Category) => {
        dispatch(addTodo({title: title, category: category}))
    }
    return (
        <div className={styles.form}>
            <FormToDo handleAddToDo={handleAddToDoItem}></FormToDo>
        </div>
    )
}

export default FormContainer;
