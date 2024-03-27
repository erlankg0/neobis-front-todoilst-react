import {ConfigProvider, Input, Radio, RadioChangeEvent} from "antd";
import {ClockCircleOutlined} from "@ant-design/icons";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import * as Yup from 'yup';

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
                resetForm();
            }}>
            {({errors, touched, setFieldValue, values}) => (
                <Form>
                    <Field
                        name="toDo"
                        value={values.toDo}
                        placeholder="To Do"
                        maxLength={30}
                        showCount
                        as={Input}
                        status={errors.toDo && 'error'}
                        prefix={touched.toDo ? <ClockCircleOutlined/> : null}
                    />

                    {/*Проверка ошибки*/}
                    {errors.toDo || touched.toDo && <div>{errors.toDo}</div>}
                    <div>
                        Categories
                    </div>
                    <Radio.Group value={radio} onChange={(event: RadioChangeEvent) => {
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
                            <Radio name="category" value={'Person'}>Person</Radio>
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
                            <Radio name="category" value={'Business'}>Business</Radio>
                        </ConfigProvider>
                    </Radio.Group>
                    {errors.category && <div>
                        {errors.category}
                    </div>}
                    <button type="submit">Send</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormToDo;
