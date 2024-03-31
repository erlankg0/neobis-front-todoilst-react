import {Button, ConfigProvider, Input, Radio, RadioChangeEvent} from "antd";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import './form.css'
import React, {useState} from "react";

interface IFormProps {
    handleAddToDo: (title: string, category: string) => void;
}

const FormToDo: React.FC<IFormProps> = ({handleAddToDo}) => {
    const [radio, setRadio] = useState(null);

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
                setRadio(null);// обнуления radio
                handleAddToDo(values.toDo, values.category);
                resetForm();

            }}>
            {({errors, setFieldValue}) => (
                <Form className={'form'}>
                    <h1 className={'title'}><strong>To Do</strong></h1>
                    <Field
                        name="toDo"
                        placeholder="To Do"
                        maxLength={30}
                        showCount
                        as={Input}
                        status={errors.toDo && 'error'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue('toDo', e.target.value)} // Обновление значения через Formik
                    />

                    <div className={'title'}>
                        Categories
                    </div>
                    <Radio.Group className={'radoGroupFlex'} value={radio} onChange={(event: RadioChangeEvent) => {
                        setFieldValue("category", event.target.value);
                        console.log(event.target.value)
                        setRadio(event.target.value);
                        return
                    }}>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Radio: {
                                        radioSize: 20,
                                        buttonSolidCheckedBg: '#ff03b8',
                                        colorBorder: '#ff03b8',
                                        buttonSolidCheckedHoverBg: '#ff03b8'
                                    }
                                },
                            }}
                        >
                            <Radio name="category" value={'Person'} className={'radioFlex'}>Person</Radio>
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
                            <Radio name="category" value={'Business'} className={'radioFlex'}>Business</Radio>
                        </ConfigProvider>
                    </Radio.Group>
                    {errors.category && <p className={'errorTitle'}>{errors.category}</p>}
                    <Button type="primary" htmlType="submit">Add</Button>
                </Form>
            )}
        </Formik>
    )
}

export default FormToDo;
