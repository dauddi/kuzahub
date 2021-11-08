import React from 'react'
import styles from './styles.module.css'
import ImgAvatar from '../common/ImgAvatar'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const ListingItem = () => {
    return (
        <div className={styles.listingItem}>
            <h3>10 acre maize plantation</h3>
            <ul className={styles.small}>
                <div>
                    <small>Nakuru</small>
                    <small>300 Kgs</small>
                    <small>10k Views</small>
                </div>
                
                <small>Posted: 12 hours ago</small>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium repellat reprehenderit dolores ratione illo cum facilis laudantium dicta, explicabo pariatur est delectus deserunt recusandae maxime ipsum iusto fugit quam voluptas!</p>
            <div className={styles.small}>
                <div className={styles.small}>
                    <ImgAvatar />
                    <p> Kiptum K. <span><CheckCircleIcon color="success" fontSize="small" /></span></p>
                </div>
                
                <span className={styles.rating}>
                    <StarIcon fontSize="small" color="warning" />
                    <StarIcon fontSize="small" color="warning" />
                    <StarIcon fontSize="small" color="warning" />
                    <StarHalfIcon fontSize="small" color="warning" />
                    <StarIcon fontSize="small" color="disabled" />
                </span>
            </div>
        </div>
    )
}

export default ListingItem;
