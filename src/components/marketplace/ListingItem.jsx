import React from 'react'
import styles from './styles.module.css'
import ImgAvatar from '../common/ImgAvatar'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Avatar from '@mui/material/Avatar';

const ListingItem = ({listing}) => {
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

    return (
        <div className={styles.listingItem}>
            <h3> {listing.title} </h3>
            <ul className={styles.small}>
                <div>
                    <small> {listing.location} </small>
                    <small>10k Views</small>
                </div>
                
                <small> {`Created: ${getTimeUpdate()}`} </small>
            </ul>
            <p> {listing.desc} </p>
            <div className={styles.small}>
                <div className={styles.small}>
                    <Avatar fontSize="small" src={listing.creator.avatar} />
                    <p> {listing.creator.name} {listing.creator.isVerified && <span><CheckCircleIcon color="success" fontSize="small" /></span>}</p>
                </div>
                
                <span className={styles.rating}>
                    <StarIcon fontSize="small" color="warning" />
                    <StarIcon fontSize="small" color="warning" />
                    <StarIcon fontSize="small" color="warning" />
                    <StarIcon fontSize="small" color="warning" />
                    <StarIcon fontSize="small" color="disabled" />
                </span>
            </div>
        </div>
    )
};

export default ListingItem;
