import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";
import { User } from "../../../models/user.class";

const RegisterFormik = () => {
let user = new User();

const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
};

const registerSchema = Yup.object().shape({
    username: Yup.string()
    .min(6, "Username too short!")
    .max(12, "Username too long!")
    .required("Username is required"),
    email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
    role: Yup.string()
    .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User / Admin")
    .required("Role is required"),
    password: Yup.string().required("Password is required"),
    confirm: Yup.string()
    .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
        [Yup.ref("password")],
        "¡Password must match!"
        ),
    })
    .required("You must confirm the password"),
});

const submit = (values) => {
    alert("Register user");
};

return (
    <div>
    <h4>Register Formik</h4>
    <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(values, null, 2));
        }}
    >
        {({
        errors,
        touched,
        values,
        inSubmitting,
        handleBlur,
        handleChange,
        }) => (
        <Form>
            <label htmlFor="username">Username</label>
            <Field
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            />

            {errors.username && touched.username && (
            <ErrorMessage name="username" component="div"></ErrorMessage>
            )}

            <label htmlFor="Email">Email</label>
            <Field id="Email" type="Email" name="Email" placeholder="Email" />

            {errors.email && touched.email && (
            <ErrorMessage name="Email" component="div"></ErrorMessage>
            )}

            <label htmlFor="password">Password</label>
            <Field
            id="password"
            type="password"
            name="password"
            placeholder="password"
            />

            {errors.password && touched.password && (
            <ErrorMessage name="Password" component="div"></ErrorMessage>
            )}

            <button type="submit">Register Account</button>
            {inSubmitting ? <p>Sending your credential...</p> : null}
        </Form>
        )}
    </Formik>
    </div>
);
};

export default RegisterFormik;
