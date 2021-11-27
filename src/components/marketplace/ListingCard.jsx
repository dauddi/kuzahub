import React from 'react'
import styles from './listingcard.module.scss'
import Image from 'next/image'
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import { Divider } from '@mui/material';
import Link from 'next/link';

const ListingCard = ({listing}) => {
    const user = listing.owner[0];

    const getTimeUpdate = () => {
        const now = Date.now();
        const difference = now - Number(listing.creationDate)

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

            if (days > 365) {
                return `${Math.floor(days/365)} years ago`;
            }
            else if (days > 30) {
                return `${Math.floor(days/30)} month(s) ago`;
            }
            else if (days < 30 && days > 1) {
                return `${days} days ago`;
            }
            else {
                return `${Math.floor(days * 24)} hours ago`;
            }
    }

    if (!user) return "";

    return user && (
        <Link href={`/listings/listingID`} passHref>
        <div className={styles.container} >
            <div className={styles.card_text}>
                <h3> {listing.title} </h3>
                 
                <div className={styles.card_small}>
                    <small> {listing.location} </small>
                    <small> {`Posted: ${getTimeUpdate()}`} </small>
                </div>
                
                <p>{listing.desc}</p>

                <div className={styles.card_user}>
                    <Avatar src={user.image} fontSize='small' />
                    <p> {user.name} </p>
                    { !user.emailVerified &&  <CheckCircleIcon color="success" fontSize='small' />}
                </div>

                <div className={styles.card_user} >
                    <p>Ratings:</p>

                    <span>
                        <StarIcon fontSize="small" color="warning"/>
                        <StarIcon fontSize="small" color="warning" />
                        <StarIcon fontSize="small" color="warning" />
                        <StarIcon fontSize="small" color="warning" />
                        <StarIcon fontSize="small" color="warning" />
                    </span>
                    
                    <small>({listing.ratings.length})</small>

                </div>
            </div>
             
             <Divider/>

        </div>
        </Link>
    )
}

export default ListingCard
