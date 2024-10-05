import React, { useEffect, useState } from 'react'
import './form.css'

const Form = () => {
    const [FormValues, setFormValues] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })


    const [FormErr, setFormErr] = useState({ firstNameErr: false, lastNameErr: false, emailErr: false, passwordErr: false, confirmPasswordErr: false })

    const submitHandler = (e) => {
        e.preventDefault()

        if (FormValues.firstName === "" && FormValues.lastName === "" && FormValues.email === "" && FormValues.password === "" && FormValues.confirmPassword === "") {
            setFormErr({ firstNameErr: true, lastNameErr: true, emailErr: true, passwordErr: true, confirmPasswordErr: true })

        }else{

        setFormValues({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
    }



    }



    useEffect(() => {
        if (FormValues.firstName !== "") {
            setFormErr({ ...FormErr, firstNameErr: false })
        } if (FormValues.lastName !== "") {
            setFormErr({ ...FormErr, lastNameErr: false })
        } if (FormValues.email !== "") {
            setFormErr({ ...FormErr, emailErr: false })
        } if (FormValues.password !== "") {
            setFormErr({ ...FormErr, passwordErr: false })
        } if (FormValues.confirmPassword !== "") {
            setFormErr({ ...FormErr, confirmPasswordErr: false })
        }

    }, [FormValues])

    return (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", backgroundColor: "#d6dde5" }}>
            <main className="form-signin w-100 m-auto rounded-4 ">
                <form onSubmit={submitHandler}>

                    <h1 className="mb-3 fw-normal text-center">Form with React</h1>
                    <div className="form-floating my-3">
                        <input type="text" className="form-control" style={{ border: FormErr.firstNameErr && "2px solid red" }} value={FormValues.firstName} name="firstName" placeholder="Duaa" onChange={(e) => {
                            setFormValues({ ...FormValues, firstName: e.target.value });

                        }} /> {FormErr.firstNameErr && (
                            <span className='text-danger'> Enter Your First Name</span>
                        )}
                        <label> First Name</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="text" className="form-control" style={{ border: FormErr.lastNameErr && "2px solid red" }} value={FormValues.lastName} name="lastName" placeholder="Batool" onChange={(e) => {
                            setFormValues({ ...FormValues, lastName: e.target.value });

                        }} />
                        {FormErr.lastNameErr && (
                            <span className='text-danger'> Enter Your last Name</span>
                        )}
                        <label>Last Name</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="email" className="form-control" style={{ border: FormErr.emailErr && "2px solid red" }} value={FormValues.email} name="email" placeholder="name@example.com" onChange={(e) => {
                            setFormValues({ ...FormValues, email: e.target.value });

                        }} />{FormErr.emailErr && (
                            <span className='text-danger'> Enter Your last Name</span>
                        )}
                        <label>Email address</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" className="form-control" style={{ border: FormErr.passwordErr && "2px solid red" }} value={FormValues.password} name="password" placeholder="Password" onChange={(e) => {
                            setFormValues({ ...FormValues, password: e.target.value });

                        }} />{FormErr.passwordErr && (
                            <span className='text-danger'> Enter password</span>
                        )}
                        <label>Password</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" className="form-control" style={{ border: FormErr.confirmPasswordErr && "2px solid red" }} value={FormValues.confirmPassword} name="confirmPassword" placeholder="name@example.com" onChange={(e) => {
                            setFormValues({ ...FormValues, confirmPassword: e.target.value });

                        }} />{FormErr.confirmPasswordErr && (
                            <span className='text-danger'> Enter password</span>
                        )}
                        <label>Confirm Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" >
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2024–2030</p>
                </form>
            </main>
        </div>
    )
}


export default Form