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

function Navbar() {
    return (
        <div className={styles.header}>

            <div className={styles.header__left}>
                {/* <Image src="/public/images/logo.svg" layout="fill" alt="Farmly Kenya" /> */}
                <h2>farmly Kenya</h2>
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
                <HeaderOption avatar = "/public/images/me.jpg" title = 'Me' />
            </div>
        </div>
    )
}

export default Navbar;