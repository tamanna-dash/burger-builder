import React from 'react'
import Aux from '../Auxilliary';
import styles from './Layout.module.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {

    state = {
        ShowSideDrawer: false
    }

    hideSideDrawerHandler = () => {
        this.setState({ShowSideDrawer: false});
    }

    toggleBtnHandler = () => {
        this.setState({ShowSideDrawer: true})
    } 

    render() {
        return (
            <Aux>
                <Toolbar toggleBtnHandler={this.toggleBtnHandler} />
                <SideDrawer show={this.state.ShowSideDrawer} hideBackdrop={this.hideSideDrawerHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}


export default Layout