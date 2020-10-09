import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../navigationItems/NavigationItems'

export const Toolbar = (props) => {
    return (
        <div className={styles.Toolbar}>
            <div style={{ color: 'white', cursor: 'pointer' }}
                onClick={props.toggleBtnHandler} className={styles.ToggleBtn}>MENU</div>
            <Logo height="80%" marginBottom="0" />
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>

        </div>
    )
}

export default Toolbar;