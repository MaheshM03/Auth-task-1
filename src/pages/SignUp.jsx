import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from 'yup'
import axios from "axios"


const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            userName: "",
            email: "",
            password: "",
            cpassword: ""

        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required("Please Enter Something")
                .min(2, "Please Enter 2 or more chars")
                .max(20, "please enter less than 20 chars"),
            userName: yup
                .string()
                .required("Please Enter Something")
                .min(2, "Please Enter 2 or more chars")
                .max(8, "please enter less than 8 chars"),
            email: yup
                .string()
                .email('Invalid email')
                .required('Required'),
            password: yup
                .string()
                .required("Please Enter Something")
                .min(5, "Please Enter At Least 5 Chars")
                .max(10, "Please Enter less than 10 chars"),
            cpassword: yup
                .string()
                .required("Please Enter Something")
                .oneOf([yup.ref('password'), null], 'Passwords must match')

        }),
        onSubmit: async values => {
            delete values.cpassword
            console.log(values);
            values = { ...values, admin: false }
            await axios.post("http://localhost:5000/users", values)
        },
    })

    return <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="card">
                            <div className="card-header bg-primary text-light text-center">
                                <h3>SignUp</h3>
                            </div>
                            <div className="card-body">
                                <div>
                                    <label htmlFor="name" className="form-label">First name</label>
                                    <input
                                        name="name"
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        type="text"
                                        className={`form-control ${formik.errors.name && 'is-invalid'}`}
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">
                                        {formik.errors.name}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="userName" className="form-label">User Name</label>
                                    <input
                                        name="userName"
                                        value={formik.values.userName}
                                        onChange={formik.handleChange}
                                        type="text"
                                        className={`form-control ${formik.errors.userName && 'is-invalid'}`}
                                        id="userName"
                                        placeholder="Enter a UserName"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">
                                        {formik.errors.userName}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="email" className="form-label">First Email</label>
                                    <input
                                        name="email"
                                        type="text"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        className={`form-control ${formik.errors.email && 'is-invalid'}`}
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">
                                        {formik.errors.email}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        className={`form-control ${formik.errors.password && 'is-invalid'}`}
                                        type="text"
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">
                                        {formik.errors.password}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="cpassword" className="form-label"
                                    >Confirm Password</label
                                    >
                                    <input
                                        name="cpassword"
                                        value={formik.values.cpassword}
                                        onChange={formik.handleChange}
                                        className={`form-control ${formik.errors.cpassword && 'is-invalid'}`}
                                        type="text"
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">
                                        {formik.errors.cpassword}
                                    </div>
                                </div>
                                <button type="submit"
                                    className="btn btn-outline-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p className="text-center mt-3">
                                    Already Have Account? <Link to='/login'>Login</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
}

export default SignUp