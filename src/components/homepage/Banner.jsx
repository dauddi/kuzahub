import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Divider from '@mui/material/Divider';
import Router from 'next/router'
import { Button } from '@mui/material';
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'

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
                <h1> Enhance Your Business Online Presence Today </h1>

                <p> Increase Revenue | Build Networks | No Extra Cost </p>

                <div className={styles.cta} >
                    <Button color="warning" onClick={e => handleCreateListing(e)} variant="contained">Create Listing</Button>

                    <Divider variant="middle" orientation="vertical" />

                    <div className={styles.cta_video}>
                        <h5> How it Works </h5>
                        <span> <PlayCircleOutlineIcon fontSize="large" color="primary" /> </span>
                    </div>
                </div>
            </div>
            <div className={styles.banner_img}>
                <Image src="/images/banner.jpg" width={400} height={303} alt="banner"/>
            </div>
        </div>
    )
}

export default Banner
