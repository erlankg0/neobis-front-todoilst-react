import {Field, Form, Formik} from "formik";

const FormToDo = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    toDo: '',
                    category: ''
                }}

                onSubmit={(values, {resetForm}) => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                }}>
                {({values}) => (
                    <Form>
                        <Field type={'input'} name={"toDo"} placheholder={'To Do'}/>
                        <div id="my-radio-group">Picked</div>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="category" value={'Person'}/>
                                One
                            </label>
                            <label>
                                <Field type="radio" name="category" value={'Business'}/>
                                Two
                            </label>
                            <div>Picked: {values.category}</div>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormToDo;