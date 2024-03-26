import styles from './App.module.css'
import {Title} from "../../compoents/title/title.tsx";
import FormContainer from "../Form/formContainer.tsx";
import ToDoList from "../ToDoList/ToDoList.tsx";


const App = () => {
    return (
        <div className={styles.content}>
            <Title name={'Erlan'}/>
            <FormContainer/>
            <ToDoList/>
        </div>
    )
}

export default App