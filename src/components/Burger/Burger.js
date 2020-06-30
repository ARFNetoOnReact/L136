
import React from 'react';

import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import css from './Burger.module.css';
//import { array } from 'prop-types';

const burger = (props) => {

    let transformedIngredients = 
        Object.keys(props.ingredients)
        .map(ingKey => {
            console.log("[Burger.js] ingKey: " + ingKey );
            return [...Array(props.ingredients[ingKey])]
            .map((_,i) => {
                console.log("[Burger.js] map: " + ingKey + " " + i);
                return <BurgerIngredient key={ingKey+i} type={ingKey} />
            });
        })
        .reduce(
            (array,el) => {
                return array.concat(el)
            },[]
        );

    if( transformedIngredients.length === 0 )
    {
        transformedIngredients = <p>Please start adding ingredients!</p>
    };

    console.log( "[Burger.js] ingredients length is " + transformedIngredients.length );
    console.log( transformedIngredients );

    return(
        <div className={css.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;