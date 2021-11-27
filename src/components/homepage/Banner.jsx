import React from 'react'
import styles from './banner.module.scss'
import Router from 'next/router'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

const Banner = () => {

    const {data: session, status} = useSession();

    const handleCreateListing = (e) => {
        e.preventDefault();
        if (session && status === 'authenticated') {
            Router.push('/ap/NewListing')
        } else {
            signIn();
        }
    }

    return (
        <div className={styles.banner}>
            <div className={styles.banner_text}>
                <h1> Connecting Businesses & Solopreneurs to Top Suppliers </h1>

                <p> Are you a Supplier? <span><a onClick={handleCreateListing}> Create a Listing </a></span> </p>

                <input type="text" placeholder="Find Suppliers" name="searchInput" />
            </div>
        </div>
    )
}

export default Banner
