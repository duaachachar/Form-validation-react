import React, { useEffect, useState } from 'react'
import './form.css'

const Form = () => {
    const [userDetails, setUserDetails] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })


    const [userErr, setUserErr] = useState({ firstNameErr: false, lastNameErr: false, emailErr: false, passwordErr: false, confirmPasswordErr: false })

    const submitHandler = (e) => {
        e.preventDefault()

        if (userDetails.firstName === "" && userDetails.lastName === "" && userDetails.email === "" && userDetails.password === "" && userDetails.confirmPassword === "") {
            setUserErr({ firstNameErr: true, lastNameErr: true, emailErr: true, passwordErr: true, confirmPasswordErr: true })

        }else{

        setUserDetails({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
    }



    }



    useEffect(() => {
        if (userDetails.firstName !== "") {
            setUserErr({ ...userErr, firstNameErr: false })
        } if (userDetails.lastName !== "") {
            setUserErr({ ...userErr, lastNameErr: false })
        } if (userDetails.email !== "") {
            setUserErr({ ...userErr, emailErr: false })
        } if (userDetails.password !== "") {
            setUserErr({ ...userErr, passwordErr: false })
        } if (userDetails.confirmPassword !== "") {
            setUserErr({ ...userErr, confirmPasswordErr: false })
        }

    }, [userDetails])

    return (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", backgroundColor: "#d6dde5" }}>
            <main className="form-signin w-100 m-auto rounded-4 ">
                <form onSubmit={submitHandler}>

                    <h1 className="mb-3 fw-normal text-center">Form with React</h1>
                    <div className="form-floating my-3">
                        <input type="text" className="form-control" style={{ border: userErr.firstNameErr && "2px solid red" }} value={userDetails.firstName} name="firstName" placeholder="Duaa" onChange={(e) => {
                            setUserDetails({ ...userDetails, firstName: e.target.value });

                        }} /> {userErr.firstNameErr && (
                            <span className='text-danger'> Enter Your First Name</span>
                        )}
                        <label> First Name</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="text" className="form-control" style={{ border: userErr.lastNameErr && "2px solid red" }} value={userDetails.lastName} name="lastName" placeholder="Batool" onChange={(e) => {
                            setUserDetails({ ...userDetails, lastName: e.target.value });

                        }} />
                        {userErr.lastNameErr && (
                            <span className='text-danger'> Enter Your last Name</span>
                        )}
                        <label>Last Name</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="email" className="form-control" style={{ border: userErr.emailErr && "2px solid red" }} value={userDetails.email} name="email" placeholder="name@example.com" onChange={(e) => {
                            setUserDetails({ ...userDetails, email: e.target.value });

                        }} />{userErr.emailErr && (
                            <span className='text-danger'> Enter Your last Name</span>
                        )}
                        <label>Email address</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" className="form-control" style={{ border: userErr.passwordErr && "2px solid red" }} value={userDetails.password} name="password" placeholder="Password" onChange={(e) => {
                            setUserDetails({ ...userDetails, password: e.target.value });

                        }} />{userErr.passwordErr && (
                            <span className='text-danger'> Enter password</span>
                        )}
                        <label>Password</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" className="form-control" style={{ border: userErr.confirmPasswordErr && "2px solid red" }} value={userDetails.confirmPassword} name="confirmPassword" placeholder="name@example.com" onChange={(e) => {
                            setUserDetails({ ...userDetails, confirmPassword: e.target.value });

                        }} />{userErr.confirmPasswordErr && (
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