import React from 'react';
import Wrap from '../../../hoc/Wrap';

const orderSummary = (props) =>
{
    const ingredientSummary = Object
        .keys(props.ingredients)
        .map( 
            igKey => { 
                return (
                    <li key = {igKey}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {igKey}
                        </span> : {props.ingredients.igKey}
                    </li>
                ) 
            } 
        );

    return (
        <Wrap>
            <h3>Your Order</h3>
            <p>Description</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>
                Continue to Checkout?
            </p>
        </Wrap>
    );
};

export default orderSummary;
