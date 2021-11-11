import React from 'react'
import styles from './headerOption.module.css'
import Avatar from '@mui/material/Avatar';

function HeaderOption({avatar, Icon, title}) {
    return (
        <div className={styles.HeaderOption}>
            {Icon && <Icon className={styles.headerOption__icon} />}
            {avatar && <Avatar className={styles.headerOption__icon} src={avatar}/>}
            <h3 className={styles.headerOption__title}>{title}</h3>
        </div>
    )
}

export default HeaderOption;