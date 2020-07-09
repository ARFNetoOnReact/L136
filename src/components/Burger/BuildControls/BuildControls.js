import React from 'react';
import css from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Salad', type: 'salad'},
];
const buildControls = (props) => (
    <div className={css.BuildControls}>
        <p>
            Current Price: <strong>{ props.price.toFixed(2) }</strong>
        </p>
        { controls.map(
            ctrl => (
                <BuildControl
                added={() => props.ingredientAdded(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                key=  {ctrl.label}
                label={ctrl.label}
                removed={() => props.ingredientRemoved(ctrl.type)}
                    />
            )
        )}
        
        <button
            className = { css.OrderButton }
            disabled =  { !props.purchasable }
            onClick={ props.ordered }
        >
            ORDER NOW
        </button>
    </div>
);

export default buildControls;