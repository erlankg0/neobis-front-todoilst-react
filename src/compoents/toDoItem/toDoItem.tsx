import {Field, Form, Formik} from 'formik';
import {Button, Checkbox, Input} from 'antd';
import React, {useState} from "react";
import styles from './toDoItem.module.css';
import {useAddDispatch} from "../../hooks.ts";
import {removeTodo, toggleToDoIsDone, updateTextTodoItem} from "../../redux/toDoSlice.ts";
import {IToDoItem} from "../../layout/ToDoItem/ToDoItemContainer.tsx";


const ToDoItem: React.FC<IToDoItem> = ({
                                           id,
                                           title,
                                           isDone,

                                       }) => {
    const dispatch = useAddDispatch();

    // для toggle edit button
    const [isEdit, setEdit] = useState(true);
    const handleIsEdit = () => {
        setEdit((value) => !value);
    }
    const handleDelete = (id: string) => {
        dispatch(removeTodo(id));
    }

    const handleIsDone = (id: string) => {
        dispatch(toggleToDoIsDone(id))
    }
    const handleEditTodo = (id: string, text: string) => {
        dispatch(updateTextTodoItem({id: id, text: text})); // Dispatch the action
    }

    return (
        <Formik
            initialValues={{
                toDo: title,
                isDone: isDone,
                isEdit: isEdit
            }}
            onSubmit={(values, {resetForm}) => {
                resetForm();
                values
            }}
        >
            {() => (
                <Form className={styles.toDoItem}>
                    <div className={styles.left}>
                        <Checkbox onChange={() => handleIsDone(id)} name={'isDone'} defaultChecked={isDone}/>
                        {isDone ? <Field
                            name="toDo"
                            as={Input}
                            value={title}
                            placeholder={title}
                            disabled={isEdit}
                            className={styles.Done}
                            style={{textDecoration: 'line-through'}}
                            onChange={(event) => handleEditTodo(id, event.target.value)}
                        /> : <Input
                            value={title}
                            placeholder={title}
                            disabled={isEdit}
                            onChange={(event) => handleEditTodo(id, event.target.value)}
                            onBlur={() => handleIsEdit()}
                        />}
                    </div>
                    <div className={styles.right}>
                        <Button onClick={handleIsEdit} type="primary">Edit</Button>
                        <Button danger onClick={() => handleDelete(id)}>Delete</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ToDoItem;
