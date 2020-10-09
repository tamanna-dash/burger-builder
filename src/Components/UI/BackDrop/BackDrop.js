import React from 'react'
import styles from './BackDrop.module.css'

const Backdrop = (props) => (
    props.show ? <div onClick={props.hideBackdrop} className={styles.backdrop}></div> : null
)

export default Backdrop 