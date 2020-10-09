import React from 'react'
import styles from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'

export const BurgerIngredient = (props) => {

    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={styles.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = <div className={styles.BreadTop}>
                <div className={styles.Seeds1}></div>
                <div className={styles.Seeds2}></div>
                <div className={styles.Seeds3}></div>
                <div className={styles.Seeds4}></div>
                <div className={styles.Seeds5}></div>
                <div className={styles.Seeds6}></div>
                <div className={styles.Pepper1}></div>
                <div className={styles.Pepper2}></div>
                <div className={styles.Pepper3}></div>
                <div className={styles.Pepper4}></div>
                <div className={styles.Pepper5}></div>
                <div className={styles.Pepper6}></div>
                <div className={styles.Pepper7}></div>
                <div className={styles.Pepper8}></div>
                <div className={styles.Pepper9}></div>
                <div className={styles.Herbs1}></div>
                <div className={styles.Herbs2}></div>
                <div className={styles.Herbs3}></div>
                <div className={styles.Herbs4}></div>
                <div className={styles.Herbs5}></div>
                <div className={styles.Herbs6}></div>
            </div>;
            break;
        case ('cheese'):
            ingredient = <div className={styles.Cheese}></div>;
            break;
        case ('meat'):
            ingredient = <div className={styles.Meat}></div>;
            break;
        case ('salad'):
            ingredient = <div className={styles.Salad}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={styles.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;