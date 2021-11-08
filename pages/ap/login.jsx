import React from 'react'
import Formik from 'formik'

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form action="/api/login" method="POST" >

                <label htmlFor="username">Username: </label>
                <input type="text" name='username' placeholder="registered email" required />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder="password" required />

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
