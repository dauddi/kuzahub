import React from 'react';
import styles from './navbar.module.css'
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



function Navbar() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const dispatch = useDispatch()

    const handleCreateListing = () => {
        if (isAuthenticated) {
            Router.push('/ap/NewListing')
        } else {
            Router.push('/nu/register')
        }
    }
    
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

            { isAuthenticated && <div className={styles.header__right}>
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

            {!isAuthenticated && <Link href="/ap/login" >
                <a>Sign In</a>
            </Link>}

            <ButtonPrimary clickHandler={handleCreateListing} title="Create a Listing" />

        </div>
    )
}

export default Navbar;