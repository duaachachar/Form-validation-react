import React from 'react'
import './form.css'

const Form = () => {
    return (
        <div  style= {{height :"100vh", display:"flex", justifyContent:"center", backgroundColor:"#d6dde5"}}>
            <main className="form-signin w-100 m-auto rounded-4 ">
                <form>

                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating my-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Duaa" />
                        <label> First Name</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Batool" />
                        <label>Last Name</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label>Email address</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label>Password</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
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