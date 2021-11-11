import React from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import Link from 'next/link'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Divider from '@mui/material/Divider';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner_text}>
                <h1> Enhance Your Business Online Presense For Free </h1>

                <h5> Increase Revenue | Build Networks | No Extra Cost </h5>

                <div className={styles.cta} >
                    <Link href="/nu/register">
                        <a className={styles.button}>Create a Listing</a>
                    </Link>

                    <Divider variant="middle" orientation="vertical" />

                    <div className={styles.mini_cta}>
                        <h6> How it Works </h6>
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
