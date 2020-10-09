import React from 'react'

import Logo from '../../Logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems'
import styles from './SideDrawer.module.css'
import Aux from '../../../hoc/Auxilliary'
import Backdrop from '../../UI/BackDrop/BackDrop'

export const SideDrawer = (props) => {

    let attachedClasses = [styles.SideDrawer, styles.Close];
    if(props.show){
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return (
        <Aux> 
            <Backdrop show={props.show} hideBackdrop={props.hideBackdrop} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" marginBottom="32px" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer;