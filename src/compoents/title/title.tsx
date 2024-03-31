import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Input} from "antd";
import styles from './title.module.css';
import {useAddDispatch, useAppSelector} from "src/hooks.ts";
import {setText} from "src/redux/nameSlice.ts";
import {s} from "vite/dist/node/types.d-aGj9QkWt";


const Title = () => {
    const dispatch = useAddDispatch();
    const name = useAppSelector(state => state.title.text);

    const handleOnChangeText = (text: string) => {
        dispatch(setText(text));
    }

    return (
        <Formik
            initialValues={{
                name: ''
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('Обязательное поле').min(3, 'Минимум 3 символа')
            })}
            onSubmit={(values, formikHelpers) => {
                console.log(values);
                formikHelpers.resetForm();
            }}>
            {() => (
                <Form className={styles.content}>
                    <p className={styles.title}>What's Your Name</p>
                    <Field
                        name="name"
                        placeholder={'Напишите свое имя'}
                        maxLength={30}
                        value={name}
                        className={styles.input}
                        as={Input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            handleOnChangeText(e.target.value);
                        }}
                    />
                </Form>
            )}
        </Formik>
    )
}

export {Title};
