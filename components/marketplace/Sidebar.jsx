import React from 'react'
import styles from './styles.module.css'

const Sidebar = () => {
    return (
        <>
            <h3>Feed</h3>
            <h3>Best Matches</h3>
            <h3>Most Recent</h3>

            <br />
            <br />
            <br />


            <h2>Categories</h2>
            <div className={styles.categories}>
                <div><label htmlFor="">Cereal</label><input type="checkbox" /></div>
                <div><label htmlFor="">Cereal</label><input type="checkbox" /></div>
                <div><label htmlFor="">Cereal</label><input type="checkbox" /></div>
                <div><label htmlFor="">Cereal</label><input type="checkbox" /></div>
                <div><label htmlFor="">Cereal</label><input type="checkbox" /></div>
            </div>
            
        </>
        
    )
}

export default Sidebar;