import React, { Component } from 'react'
import Button from '../../../Components/UI/Button/Button'
import styles from './ContactData.module.css'
import axios from '../../../axios-order'
import Spinner from '../../../Components/UI/Spinner/spinner'
import Input from '../../../Components/UI/Input/Input'
import {connect} from 'react-redux'

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            pinCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'PinCode',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                },
                valid: false,
                touched: false,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'fastest', selected: 'selected' },
                        { value: 'cheapest', displayValue: 'cheapest', selected: '' },
                    ]
                },
                value: '',
                validation: {},
                valid: true,
            },
        },
        loading: false,
        formIsValid: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        let formData = {}
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
        }
        //alert('Hn khareed le bhai')
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/')
            }).catch(error => {
                this.setState({ loading: false });
            })
    }

    checkValidity(value,rules){
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    onChangeHandler = (event, inputIdentifier) => {
        let formData = { ...this.state.orderForm };
        const formElementData = { ...formData[inputIdentifier] }
        formElementData.value = event.target.value;
        formElementData.valid = this.checkValidity(formElementData.value, formElementData.validation);
        formElementData.touched = true;
        formData[inputIdentifier] = formElementData;
        console.log(formElementData);

        let formIsValid = true;

        for(let inputIdentifier in formData){
            formIsValid = formData[inputIdentifier].valid && formIsValid;
        }

        this.setState({ orderForm: formData, formIsValid: formIsValid });
    }

    render() {
        let formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }


        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        value={formElement.config.value}
                        invalid = {!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        elementConfig={formElement.config.elementConfig}
                        touched={formElement.config.touched}
                        changed={(e) => this.onChangeHandler(e, formElement.id)} />
                ))}
                <Button btntype="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>);
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h2>Enter your contact data</h2>
                {form}
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

export default connect(mapStateToProps)(ContactData)