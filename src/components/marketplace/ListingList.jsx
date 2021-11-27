import React, {useState, useEffect} from 'react'
import styles from "./listinglist.module.scss"
import Loader from '../common/Loader'
// import listings from '../../../listings.json'
import ListingCard from './ListingCard'
import useSWR from 'swr'
import { getSession } from 'next-auth/react'

const fetcher = (url) => fetch(url).then((res) => res.json())

const ListingList = (props) => {
    const { data, error } = useSWR('/api/listings/all', fetcher)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (data) {
            const { posts } = data;

            props.home ? posts = posts.slice(0, 6) : posts = posts
            setPosts(posts);
        }
    }, [data, props.home])

    if (error) {
        return <div>TempError! Please wait...</div> ;
    }

    if (!data) return <div>Loading...</div>

    return data && (
        <div className={ styles.listings }>
            { posts.map(post => <ListingCard listing={post} key={post.id} /> ) }
        </div>
    )
}

export default ListingList