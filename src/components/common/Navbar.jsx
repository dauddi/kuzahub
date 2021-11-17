import React, {useState} from 'react';
import styles from './navbar.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from '../../features/Auth/authSlice'
import Link from 'next/link'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ButtonPrimary from './ButtonPrimary'
import Badge from '@mui/material/Badge';
import Router from 'next/router'

import { useSession } from 'next-auth/react'

import {signIn, signOut} from 'next-auth/react'


function Navbar() {

    const {data: session, status} = useSession();
    console.log(session, status)

    // const handleCreateListing = () => {
    //     if (isAuthenticated) {
    //         Router.push('/ap/NewListing')
    //     } else {
    //         Router.push('/nu/register')
    //     }
    // }
    
    return (
        <div className={styles.header}>

            <div className={styles.header__left}>
                <Link href="/" passHref >
                    <Image className="logo" priority src="/images/logo.png" width={160} height={43.4} alt="tuzahub logo" />
                </Link>
                
                <div className={styles.header__search}>
                    <SearchIcon fontSize="small" />
                    <input type="text" />
                </div>
            </div>

            {(session && status === 'authenticated') && <div className={styles.header__right}>
                <HomeIcon />
                <Badge badgeContent={4} fontSize="small" color="warning" >
                    <ChatIcon />
                </Badge>

                <Badge badgeContent={2} color="warning" >
                    <NotificationsIcon />
                </Badge>
                
                <Badge color='success' variant='dot'>
                    <PersonPinIcon />
                </Badge>
            </div>}

            {!(session && status === 'authenticated')  && <Link href="/api/auth/signin" >
                <a onClick={e => {
                    e.preventDefault();
                    signIn();
                }}>Sign In</a>
            </Link>}

            {(session && status === 'authenticated') && <Link href="/api/auth/signin" >
                <a onClick={e => {
                    e.preventDefault();
                    signOut();
                }}>Sign Out</a>
            </Link>}

            {/* <ButtonPrimary clickHandler={handleCreateListing} title="Create a Listing" /> */}

            <Link href="/api/auth/signup" >
                <a onClick={e => {
                    e.preventDefault();
                    if (!(session && status === 'authenticated')) {
                        signIn();
                    }
                    else{
                        Router.push('/ap/NewListing')
                    }
                    
                }} >Create Listing</a>
            </Link>

        </div>
    )
}

export default Navbar;