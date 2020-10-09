import React from 'react'
import Aux from '../../../hoc/Auxilliary'
import Button from '../../UI/Button/Button'

export default class OrderSummary extends React.Component {

    render() {
        let ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
        });
        return(
            <Aux>
                <h4>Your Order</h4>
                <h5>Delicious Burger with following ingretients</h5>
                <ul>
                    {ingredientSummary}
                </ul>
                <h5>Total Price : <strong>{this.props.price}</strong></h5>
                <h5>Continue to Checkout?</h5>
                <Button btntype="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btntype="Success" clicked={this.props.purchaseContinue} >CONTINUE</Button>
            </Aux>
        )
    }
   
}



