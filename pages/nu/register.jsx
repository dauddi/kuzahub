import React from 'react'
import Link from 'next/link'
import styles from './register.module.scss'
import {Divider} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import {signIn, signOut} from 'next-auth/react'

const register = () => {
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

                <Link href="/api/auth/signin" passHref>
                    <div className={styles.google}>
                        <GoogleIcon />
                        <a onClick={ (e) => {
                            e.preventDefault();
                            signIn('google');
                        }}>Continue With Google</a>
                    </div>
                </Link>

                <Divider>or</Divider>

                <div className={styles.email}>
                    <EmailIcon />
                    <input type="email" placeholder="email address" name='username' />
                </div>

                <a className={styles.submit} type="submit" > Continue with Email </a>

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

export default register
