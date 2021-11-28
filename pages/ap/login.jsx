import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from './login.module.scss'
import {Divider} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import {signIn, signOut} from 'next-auth/react'
import { useSession } from 'next-auth/react'
import Router from 'next/router'

const Login = () => {
    const {data: session} = useSession();

    useEffect(() => {
        if (session) Router.push('/')
    })

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link href="/" passHref>
                    <h1>kuzaHub</h1>
                </Link>
                
            </nav>

            <Divider />

            <main className={styles.main}>
                <h2>Log In to kuzaHub</h2>

                <Divider />

                <div className={styles.email}>
                    <EmailIcon />
                    <input type="email" placeholder="email address" name='username' />
                </div>

                <a className={styles.submit} type="submit" > Continue with Email </a>

                <Divider>or</Divider>

                <Link href="/api/auth/google" passHref>
                  <div className={styles.google}>
                      <GoogleIcon />
                      <a onClick={(e) => {
                          e.preventDefault();
                          signIn('google')
                      }} >Continue With Google</a>
                  </div>
                </Link>

                <Divider />

                <p>
                    Don&#39;t have an Account yet?  
                    <Link href='../nu/register'>
                        <a style={{color: 'green'}}> Sign Up </a> 
                    </Link>
                </p> 
                
            </main>

            <footer className={styles.footer}>
                <h3>kuzaHub Footer</h3>
            </footer>
        </div>
    )
}

export default Login;
