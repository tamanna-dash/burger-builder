import React from 'react'
import BurgerLogo from '../../Assets/Images/28.1 burger-logo.png.png'
import styles from './Logo.module.css'

export const Logo = (props) => (
    <div className={styles.Logo} style={{height: props.height, marginBottom: props.marginBottom}}>
        <img src={BurgerLogo} alt="MyBurger" />
    </div>
)

export default Logo