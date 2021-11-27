import React, {useState, useEffect} from 'react';
import styles from './navbar.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@mui/material/Badge';
import { Divider } from '@material-ui/core';
import Router from 'next/router'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import { useSession } from 'next-auth/react'
import {signIn, signOut} from 'next-auth/react'

function Navbar() {
    const [menuClicked, setMenuClicked] = useState(false)
    const { data: session, status } = useSession();
    const { user } = session ? session : {};

    // console.log(session, status)

    useEffect(() => {
        
    })
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header__left}>
                    <Link href="/" passHref >
                        {/* <Image className="logo" priority src="/images/logo.png" width={160} height={43.4} alt="tuzahub logo" /> */}

                        <h1>kuzaHub</h1>
                    </Link>
                    
                    {/* <div className={styles.header__search}>
                        <SearchIcon fontSize="small" />
                        <input type="text" />
                    </div> */}
                </div>

                {(session && status === 'authenticated') && <div className={styles.header__right}>
                    <Link href="/ap/marketplace" passHref>
                        <a> Marketplace </a>
                    </Link>

                    {/* <Badge badgeContent={2} color="warning" >
                        <NotificationsIcon />
                    </Badge> */}

                    <div>
                    
                    <Badge color='success' variant='dot'>
                        <Avatar onClick={() => {setMenuClicked(!menuClicked)}} fontSize="small" src={user?.image} alt={user?.name}  />
                    </Badge>



                    { menuClicked && <div className={styles.dropdown} >
                        <div className={styles.profile}>
                            <Avatar src={user?.image} />
                            <span>
                                <h3>{user?.name}</h3>
                                <Link href='#'>Manage your Profile</Link>
                            </span>
                        </div>

                        <Divider />

                        <Link href='#' passHref>
                            <div className={styles.dropitems}>
                                <ChatIcon fontSize="small" />
                                <p>Messages</p>
                            </div>
                        </Link>
                        
                        <Link href='#' passHref>
                            <div className={styles.dropitems}>
                                <FeaturedPlayListOutlinedIcon fontSize="small" />
                                <p>My Listings</p>
                            </div>
                        </Link>

                        <Link href='#' passHref>
                            <div className={styles.dropitems}>
                                <PeopleAltOutlinedIcon fontSize="small" />
                                <p>Notifications</p>
                            </div>
                        </Link>

                        <Link href='#' passHref>
                            <div className={styles.dropitems}>
                                <BookmarksOutlinedIcon fontSize="small" />
                                <p>Saved</p>
                            </div>
                        </Link>

                        <Link href='#' passHref>
                            <div className={styles.dropitems}>
                                <PeopleAltOutlinedIcon fontSize="small" />
                                <p>Connections</p>
                            </div>
                        </Link>

                        <Link onClick={(e) => {
                            e.preventDefault();
                            signOut();
                        }} href='/api/auth/signout' passHref>
                            <div className={styles.dropitems}>
                                <ExitToAppOutlinedIcon fontSize="small" />
                                <p>Sign Out</p>
                            </div>
                        </Link>
                    </div>}
                    </div>




                </div>}

                {!(session && status === 'authenticated')  && <Link href="/api/auth/signin" >
                    <a onClick={e => {
                        e.preventDefault();
                        signIn();
                    }}>Sign In</a>
                </Link>}

                {!(session && status === 'authenticated') && <Link href="/api/auth/signup" >
                    <a onClick={e => {
                        e.preventDefault();
                        if (!(session && status === 'authenticated')) {
                            signIn();
                        }
                        else{
                            Router.push('/ap/NewListing')
                        }
                    }} >Create Listing</a>
                </Link>}

                
            </div>

            
        </div>
    )
}

export default Navbar;