import {ConfigProvider, Input, Radio, RadioChangeEvent, Button} from "antd";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import * as Yup from 'yup';
import styles from './form.module.css'

const FormToDo = () => {

    const [radio, setRadio] = useState(null);
    const handleOnChangeRadio = (event: RadioChangeEvent) => {
        setRadio(event.target.value);
    }

    return (

        <Formik
            initialValues={{
                toDo: '',
                category: ''
            }}
            validationSchema={Yup.object().shape({
                toDo: Yup.string().min(5, 'Минимум 5 символов').max(30, 'Максимум 30 символов').required('Объязательное поле'),
                category: Yup.string().required('Объязательное поле')
            })}
            onSubmit={(values, {resetForm}) => {
                alert(JSON.stringify(values, null, 2));
                setRadio(null);
                resetForm();
            }}>
            {({errors, touched, setFieldValue, values}) => (
                <Form className={styles.form}>
                    <h1 className={styles.title}><strong>To Do</strong></h1>
                    <Field
                        name="toDo"
                        value={values.toDo}
                        placeholder="To Do"
                        maxLength={30}
                        showCount
                        as={Input}
                        status={errors.toDo && 'error'}
                    />
                    <div className={styles.title}>
                        Categories
                    </div>
                    <Radio.Group className={styles.radoGroupFlex} value={radio} onChange={(event: RadioChangeEvent) => {
                        setFieldValue("category", event.target.value);
                        handleOnChangeRadio(event);
                        return
                    }}>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Radio: {
                                        radioSize: 20,
                                        buttonSolidCheckedBg: '#ff0303',
                                        colorBorder: '#ff0303',
                                        buttonSolidCheckedHoverBg: '#ff0303'
                                    }
                                },
                            }}
                        >
                            <Radio name="category" value={'Person'} className={styles.radioFlex}>Person</Radio>
                        </ConfigProvider>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Radio: {
                                        radioSize: 20,
                                        buttonSolidCheckedBg: '#00c000',
                                        colorBorder: '#00c000',
                                    }
                                },
                            }}
                        >
                            <Radio name="category" value={'Business'} className={styles.radioFlex}>Business</Radio>
                        </ConfigProvider>
                    </Radio.Group>
                    {errors.category && <p className={styles.errorTitle}>{errors.category}</p>}
                    <Button type="primary" htmlType="submit">Add</Button>
                </Form>
            )}
        </Formik>
    )
}

export default FormToDo;
