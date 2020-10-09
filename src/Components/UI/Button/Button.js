import React from 'react'
import styles from './Button.module.css'

export const Button = (props) => (
    <button className={[styles.Button, styles[props.btntype]].join(' ')}
        disabled={props.disabled}
        onClick={props.clicked}>
        {props.children}
    </button>
)

export default Button;