import React from 'react'
import Link from 'next/link'
import ListingList from '../marketplace/ListingList'

const PreviewListings = () => {
    return (
        <div>
            <h1>Latest Listings</h1>

            <ListingList home={true} />

            <Link passHref href='/ap/marketplace' >
                <h4>Marketplace &rarr;</h4>
            </Link>
        </div>
    )
}

export default PreviewListings;
