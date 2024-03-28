import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Input} from "antd";
import styles from './title.module.css'
interface IName {
    name: string
}

const Title = ({name}: IName) => {

    return (
        <Formik
            initialValues={{
                name: 'Erlan'
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('Объязательное поле').min(3, 'Минимум 3 символа')
            })}
            onSubmit={(values, formikHelpers) => {
                console.log(values);
                formikHelpers.resetForm();
            }}>
            {({values, errors, touched}) => (
                <Form className={styles.content}>
                    <p className={styles.title}>What's Your Name</p>
                    <Field
                        placeholder={'Напишите свое имя'}
                        maxLength={30}
                        defaultValue={name}
                        value={name}
                        className={styles.input}
                        as={Input}
                    />

                </Form>
            )}

        </Formik>
    )
}

export {Title}
