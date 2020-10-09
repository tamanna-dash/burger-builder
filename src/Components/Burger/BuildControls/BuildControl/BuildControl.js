import React from 'react'
import styles from './BuildControl.module.css'

export const BuildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <h4 className={styles.Label}>{props.label}</h4>
            <button className={styles.Less} disabled={props.disabled} onClick={props.ingredientRemoved} >LESS</button>            
            <button className={styles.More} onClick={props.ingredientAdded} >MORE</button>            
        </div>
    )
}


export default BuildControl
