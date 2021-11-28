import React, {useState, useEffect} from 'react';
import styles from "./listinglist.module.scss";
import ListingCard from './ListingCard';
import useSWR from 'swr';
import { getSession } from 'next-auth/react';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ListingList = ({ home }) => {
    const [posts, setPosts] = useState([])
    const { data, error } = useSWR('/api/listings/all', fetcher)

    useEffect(() => {
        if (data) {
            const { posts } = data;
            setPosts(posts);
        //     (home && posts.length > 4) ? setPosts(posts.slice(0, 4)) : setPosts(posts);
        }
    }, [data] )

    if (!data) return <div>Loading...</div>

    return (
        <div className={ styles.container }>
            <div className={ styles.listings }>
                { posts.map(post => <ListingCard listing={post} key={post.id} /> ) }
            </div>
        </div>

    )
}

export default ListingList