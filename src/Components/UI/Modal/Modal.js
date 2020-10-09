import React from 'react'
import styles from './Modal.module.css'
import Aux from '../../../hoc/Auxilliary'
import Backdrop from '../BackDrop/BackDrop'

export default class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    render() {
        return (
            <Aux >
                <Backdrop show={this.props.show} hideBackdrop={this.props.modalClosed} />
                <div className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>

        )
    }
}
