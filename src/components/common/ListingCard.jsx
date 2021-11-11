import React from 'react'
import styles from './listingcard.module.css'
import Image from 'next/image'
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';

const ListingCard = () => {
    return (
        <div className={styles.container} >
             <Image className={styles.card_img} src="/images/market-min.jpg" width={280} height={140} alt="card image" />
             <div className={styles.card_text}>
                 <div className={styles.card_small}>
                    <small>Nairobi, Kenya</small>
                    <small> 2 days ago </small>
                 </div>
                
                <h3>Catering Services for events</h3>
                <p>Hello, fam. We are a small catering company offering catering services for events.</p>
                <div className={styles.card_user}>
                    <Avatar src="https://avatars.githubusercontent.com/u/15913767?v=4" fontSize='small' />
                    <p>Jane W.</p>
                    <CheckCircleIcon color="success" fontSize='small' />
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
                    
                    <small>(34)</small>

                </div>
             </div>
             

        </div>
    )
}

export default ListingCard
