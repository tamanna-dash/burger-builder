import React from 'react'

import styles from './CheckoutSummary.module.css'
import Burger from '../../Burger/Burger'
import Button  from '../../UI/Button/Button'

export const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h2>Hope it tastes delicious!</h2>
            <div className={styles.Burger}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btntype="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btntype="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}


export default CheckoutSummary