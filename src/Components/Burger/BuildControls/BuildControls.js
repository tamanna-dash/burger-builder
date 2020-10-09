import React from 'react'
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'


const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'}
]

export const BuildControls = (props) => {
    return (
        
        <div className={styles.BuildControl}>
            <h4>Current Price: <strong>{props.price}</strong></h4>
            {controls.map(ctrl => {
                return <BuildControl ingredientAdded={() => props.ingredientAdded(ctrl.type)} 
                ingredientRemoved = {() => props.ingredientRemoved(ctrl.type)} 
                disabled= {props.disabled[ctrl.type]}
                key={ctrl.label} 
                label={ctrl.label} />
            })}

            <button className={styles.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}
            >ORDER NOW</button>
        </div>
    )
}

export default BuildControls;