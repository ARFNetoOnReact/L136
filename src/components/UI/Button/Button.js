import css from './Button.module.css';
import React from 'react';

const button = (props) =>
(
    <button
        className=
        {[css.Button, css[props.btnType]].join(' ')}
        onClick={props.clicked}
    >
            {props.children}
    </button>
);

export default button;