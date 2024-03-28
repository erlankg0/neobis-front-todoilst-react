import {Formik, Field, Form} from 'formik';
import {Input, Button, Radio, Checkbox} from 'antd';
import {useState} from "react";
import * as Yup from 'yup';
import styles from './toDoItem.module.css'

const ToDoItem = () => {
    const [title, setTitle] = useState('Todo')
    const [isEdit, setEdit] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const handleIsEdit = () => {
        setEdit((value) => !value);
    }

    const handleDelete = () => {
        alert('delete')
    }

    const handleIsDone = () => {
        setIsDone((value) => !value);
    }
    return (
        <Formik
            initialValues={{
                toDo: 'ToDo',
                isDone: isDone,
                isEdit: isEdit
            }}
            onSubmit={(values, {resetForm}) => {
                console.log(values);
                resetForm();
            }}
            validationSchema={{
                toDo: Yup.string().min(3, "Больше 3х символов").required('Объязательное поле')
            }}
        >
            {() => (
                <Form className={styles.toDoItem}>
                    <div className={styles.left}>
                        <Checkbox onChange={handleIsDone} name={'isDone'}/>
                        <Field
                            name="toDo"
                            as={Input}
                            value={title}
                            placeholder={title}
                            disabled={isEdit}
                        />
                    </div>
                    <div className={styles.right}>
                        <Field
                            name={'edit'}
                            as={Button}
                            onClick={handleIsEdit}
                            type="primary"
                        >Edit
                        </Field>
                        <Field name={'delete'} as={Button} danger onClick={handleDelete}>Delete</Field>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ToDoItem;
