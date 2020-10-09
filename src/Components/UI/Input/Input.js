import React from 'react'
import styles from './Input.module.css'

export const Input = (props) => {

    let inputElement = null;
    let inputClasses = [styles.InputElement];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(styles.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.changed} value={props.value} />
            break;
        case ('textArea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.changed} value={props.value} />
            break;
        case ('select'):
            inputElement = (
                <select className={inputClasses.join(' ')} {...props.elementConfig} onChange={props.changed} value={props.value}>
                    {props.elementConfig.options.map(option => {
                        return <option
                            key={option.value}
                            value={option.value}>
                            {option.displayValue}
                        </option>
                    })}
                </select>
            )
            break;
        default:
            inputElement = <input className={styles.InputElement} {...props.elementConfig} onChange={props.changed} value={props.value} />
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input