import styles from './form.module.css'
import FormToDo from "../../compoents/form/form.tsx";
import {useAddDispatch} from "../../hooks.ts";
import {addTodo, Category} from "../../redux/toDoSlice.ts";

interface IToDoForm {
    title: string,
    category: Category
}

const FormContainer = () => {
    const dispatch = useAddDispatch();

    const handleAddToDo = (title: string, category: Category) => {
        dispatch(addTodo({title: title, category: category}))
        console.log('dispatch')
    }
    return (
        <div className={styles.form}>
            <FormToDo handleAddToDo={handleAddToDo}/>
        </div>
    )
}

export default FormContainer;
export type {IToDoForm};