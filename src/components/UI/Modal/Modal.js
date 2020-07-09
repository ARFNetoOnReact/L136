import css from './Modal.module.css';
import React from 'react';

const modal = (props)  => (
    <div
        className={css.Modal}
    >
        {props.children}
    </div>
);

export default modal;
