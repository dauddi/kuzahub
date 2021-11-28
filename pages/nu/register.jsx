import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './register.module.scss'
import {Divider} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {signIn, signOut} from 'next-auth/react'
import {useSession} from 'next-auth/react'
import Router from 'next/router'

const Register = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const { data: session } = useSession();

    useEffect(() => {
        if (session) Router.push('/')
    }, [session])

    const handleChange = (e) => {
        setEnteredEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link href="/" passHref>
                    <h1>kuzaHub</h1>
                </Link>
                
            </nav>

            <Divider />

            <main className={styles.main}>
                <h2>Get Your Free Account</h2>

                <Divider />

                <Link href="/api/auth/google" passHref>
                    <div className={styles.google}>
                        <GoogleIcon />
                        <a onClick={ (e) => {
                            e.preventDefault();
                            signIn('google');
                        }}>Continue With Google</a>
                    </div>
                </Link>

                <Divider>or</Divider>

                <div className={styles.fullname}>
                    <input className={styles.name} type="text" name="firstname" placeholder="first name" />

                    <input className={styles.name} type="text" name="lastname" placeholder="last name" />
                </div>

                <div className={styles.email}>
                    <EmailIcon />
                    <input type="email" placeholder="email address" name='username' onChange={ handleChange } value={ enteredEmail } />
                </div>

                <div className={styles.email}>
                    <VpnKeyIcon />
                    <input type="password" placeholder="new password" name='password' onChange={ handleChange } />
                </div>

                <Link href='/api/auth/signin' >
                    <a className={styles.submit} onClick={ handleSubmit } type="submit" > Create Account </a>
                </Link>

                <Divider />

                <p>
                    Already have an account? 
                    <Link href='../ap/login'>
                        <a style={{color: 'green'}}> Log In </a> 
                    </Link>
                </p>
                
            </main>

            <footer className={styles.footer}>
                <h3>kuzaHub Footer</h3>
            </footer>
        </div>
    )
}

export default Register;
