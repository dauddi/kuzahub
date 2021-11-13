import React from 'react'
import styles from "./styles.module.css"
import listings from '../../../listings.json'
import ListingCard from './ListingCard'

const ListingList = () => {
    return (
        <div className={styles.listings}>
            { listings.map(listing => <ListingCard listing={listing} key={listing.id} /> ) }
        </div>
    )
}

export default ListingList
