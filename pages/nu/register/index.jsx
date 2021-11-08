import React from 'react'
import Formik from 'formik'

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form action="/api/register" method="POST" >
                <label htmlFor="firstname">First Name</label>
                <input type="text" name='firstname' placeholder="First name" reqired />

                <label htmlFor="lastname">Last Name</label>
                <input type="text" name='lastname' placeholder="Last name" required />

                <label htmlFor="username">E-mail: </label>
                <input type="text" name='username' placeholder="Email" required />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder="password" required />

                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
