import {Formik, Field, Form} from 'formik';
import {Input, Button, Radio} from 'antd';
import {useState} from "react";
import * as Yup from 'yup';

const ToDoItem = () => {
    const [isDone, setDone] = useState(false);

    const handleIsDone = () => {
        setDone((value) => !value)
    }
    const handleEdit = () => {
        alert('edit')
    }
    const handleDelete = () => {
        alert('delete')
    }
    return (
        <Formik
            initialValues={{
                toDo: '',
                isDone: isDone,
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
                <Form>
                    <Field name="isDone">
                        {() => (
                            <Radio.Group value={isDone}>
                                {
                                    isDone ? <Radio value={true} onClick={handleIsDone}>Done</Radio> :
                                        <Radio onClick={handleIsDone} value={false}>Not Done</Radio>
                                }
                            </Radio.Group>
                        )}
                    </Field>
                    <Field name="toDo" as={Input}/>
                    <Field name={'edit'} as={Button} onClick={handleEdit}>Edit</Field>
                    <Field name={'delete'} as={Button} onClick={handleDelete}>Delete</Field>
                </Form>
            )}
        </Formik>
    );
};

export default ToDoItem;
