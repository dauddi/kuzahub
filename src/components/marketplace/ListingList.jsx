import React from 'react'
import ListingItem from './ListingItem'
import styles from "./styles.module.css"
import listings from '../../../listings.json'

const ListingList = () => {
    return (
        <div className={styles.listings}>
            { listings.map(listing => <ListingItem listing={listing} key={listing.id} /> ) }
        </div>
    )
}

export default ListingList
