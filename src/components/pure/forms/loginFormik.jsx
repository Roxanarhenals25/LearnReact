import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
password: Yup.string().required('Password is required'),
});

const LoginFormik = () => {
const inicialCredential = {
    email: "",
    password: "",
};

return (
    <div>
    <h1>Sign Up</h1>
    <Formik
        initialValues={inicialCredential}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(values, null, 2));
        localStorage.setItem('credential', values)
        }}
    >

        {({ errors, touched, values, inSubmitting, handleBlur, handleChange }) => (
            <Form>
            <label htmlFor="email">Email</label>
            <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
            />

            {
                errors.email && touched.email && (
                    <ErrorMessage name="Email" component='div'></ErrorMessage>
                )
            }

            <label htmlFor="password">Password</label>
            <Field
                id="password"
                type="password"
                name="password"
                placeholder="password"
            />

            {
                errors.password && touched.password && (
                    <ErrorMessage name="Password" component='div'></ErrorMessage>
                )
            }

            <button type="submit">Login</button>
            {inSubmitting ? (<p>Login your credential...</p>) : null}
            </Form>
        )
        }

    </Formik>
    </div>
);
};

export default LoginFormik;
