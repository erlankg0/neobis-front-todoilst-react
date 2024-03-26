import styles from './form.module.css'
import FormToDo from "../../compoents/form/form.tsx";

const FormContainer = () => {
    return (
        <div className={styles.form}>
            <FormToDo/>
        </div>
    )
}

export default FormContainer;