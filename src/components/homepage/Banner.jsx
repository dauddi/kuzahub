import React from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Divider from '@mui/material/Divider';
import ButtonPrimary from '../common/ButtonPrimary';
import {useSelector} from 'react-redux'
import Router from 'next/router'

const Banner = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    const handleCreateListing = () => {
        if (isAuthenticated) {
            Router.push('/ap/NewListing')
        } else {
            Router.push('/nu/register')
        }
    }

    return (
        <div className={styles.banner}>
            <div className={styles.banner_text}>
                <h1> Enhance Your Business Online Presense For Free </h1>

                <h5> Increase Revenue | Build Networks | No Extra Cost </h5>

                <div className={styles.cta} >
                    <ButtonPrimary clickHandler={handleCreateListing} title="Create a Listing" />

                    <Divider variant="middle" orientation="vertical" />

                    <div className={styles.cta_video}>
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
