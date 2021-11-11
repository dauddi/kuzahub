import React from 'react';
import styles from './navbar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from '../../features/Auth/authSlice'
import Link from 'next/link'

function Navbar() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const dispatch = useDispatch()

    return (
        <div className={styles.header}>

            <div className={styles.header__left}>
                <Link href="/" passHref >
                    <Image priority src="/images/logo.png" width={160} height={43.4} alt="tuzahub logo" />
                </Link>
                
                <div className={styles.header__search}>
                    <SearchIcon fontSize="small" />
                    <input type="text" />
                </div>
            </div>

            <div className={styles.header__right}>
                <HeaderOption Icon = {HomeIcon} title = 'Home' />
                <HeaderOption Icon = {SupervisorAccountIcon} title = 'My Network' />
                <HeaderOption Icon = {ChatIcon} title = 'Messages' />
                <HeaderOption Icon = {NotificationsIcon} title = 'Notifications' />
                <HeaderOption avatar = "https://avatars.githubusercontent.com/u/64232602?v=4" title = 'Profile' />
            </div>
        </div>
    )
}

export default Navbar;