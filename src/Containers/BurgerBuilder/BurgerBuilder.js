import React, { Component } from 'react'
import Aux from '../../hoc/Auxilliary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../Components/UI/Spinner/spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        // axios.get('https://react-my-burger-3a4fb.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data })
        //     }).catch(error => {
        //         this.setState({ error: true })
        //     })
    }

    updatePurchaseSTate(ingredients) {
        let sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)

       return sum > 0 
    }
    purchaseCanceled = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinue = () => {
        this.props.history.push('/checkout');
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }


    render() {

        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can not load</p> : <Spinner />

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        purchasable={this.updatePurchaseSTate(this.props.ings)}
                        price={this.props.price}
                        disabled={disabledInfo}
                        ordered={this.purchaseHandler} />
                </Aux>
            );

            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                purchaseCanceled={this.purchaseCanceled}
                purchaseContinue={this.purchaseContinue}
                price={this.props.price} />
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }


        return (
            <div>
                <Aux>
                    <Modal show={this.state.purchasing} modalClosed={this.purchaseCanceled} >
                        {orderSummary}
                    </Modal>
                    {burger}
                </Aux>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}
 const mapDispatchToProps = dispatch => {
     return {
         onIngredientAdded: (igName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: igName}),
         onIngredientRemoved: (igName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: igName})
     }
 }


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))