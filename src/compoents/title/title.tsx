import {Field, Form, Formik} from "formik";
import {Input} from "antd";
import styles from './title.module.css'

interface IName {
    name: string
}

const Title = ({name}: IName) => {

    return (
        <Formik
            initialValues={{
                name: name
            }}
            onSubmit={(values, formikHelpers) => {
                console.log(values);
                formikHelpers.resetForm();
            }}>
            {({values}) => (
                <Form className={styles.content}>
                    <p className={styles.title}>What's Your Name</p>
                    <Field as={Input} className={styles.input} value={values.name} placeholder={'Напишите свое имя'}></Field>
                </Form>
            )}

        </Formik>
    )
}

export {Title}
