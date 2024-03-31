import './form.css'
import FormToDo from "../../compoents/form/form.tsx";
import {useAddDispatch} from "../../hooks.ts";
import {addTodo} from "../../redux/toDoSlice.ts";


const FormContainer = () => {
    const dispatch = useAddDispatch();

    const handleAddToDoItem = (title: string, category: string) => {
        if (category == 'Person') {
            dispatch(addTodo({title: title, category: 'Person'}))
        } else {
            dispatch(addTodo({title: title, category: 'Business'}))
        }
    }
    return (
        <div className={'form'}>
            <FormToDo handleAddToDo={handleAddToDoItem}></FormToDo>
        </div>
    )
}

export default FormContainer;
