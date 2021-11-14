import React from 'react'
import Link from 'next/link'
import styles from './btnprimary.module.scss'

const ButtonPrimary = (props) => {
    return (
        <button onClick={props.clickHandler} className={styles.button}> {props.title} </button>
    )
}

export default ButtonPrimary
