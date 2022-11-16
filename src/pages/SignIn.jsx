import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from 'yup'
import axios from "axios"


const SignIn = ({ setlogin, login }) => {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: ""
        },
        validationSchema: yup.object({
            userName: yup
                .string()
                .required("Please Enter Something")
                .min(2, "Please Enter 2 or more chars")
                .max(8, "please enter less than 8 chars"),
            password: yup
                .string()
                .required("Please Enter Password")
                .min(5, "Please Enter At Least 5 Chars")
                .max(10, "Please Enter less than 10 chars")

        }),
        onSubmit: async values => {
            console.log(values);
            const { data } = await axios.get("http://localhost:5000/users")
            const result = data.find(user => user.userName == values.userName && user.password == values.password)
            console.log("user verified", result);
            if (result.userName) {
                setlogin(result)
                window.localStorage.setItem("UserData", JSON.stringify(result));
            }
        },
    })

    useEffect(() => {

        login.userName
            ? navigate('/')
            : ""
        return () => {

        }
    }, [login])


    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form onSubmit={formik.handleSubmit}>
                    <div className="card">
                        <div className="card-header bg-primary text-light text-center">
                            <h3>SignIn</h3>
                        </div>
                        <div className="card-body">
                            <div>
                                <label htmlFor="userName" className="form-label">UserName</label>
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
                            <button type="submit"
                                className="btn btn-outline-primary w-100 mt-3">
                                Sign In
                            </button>
                            <p className="text-center mt-3">
                                Don't Have Account? <Link to='/register'>Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default SignIn