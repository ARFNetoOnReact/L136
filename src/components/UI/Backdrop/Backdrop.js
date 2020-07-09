import css from './Backdrop.module.css';
import React from 'react';

const backdrop = (props) =>
(
    props.show ? 
        <div 
            className={css.Backdrop}
            onClick={props.clicked}
        >
        </div> : null
);

export default backdrop;