import Backdrop from '../Backdrop/Backdrop';
import css from './Modal.module.css';
import React from 'react';
import Wrap from '../../../hoc/Wrap';

const modal = (props)  => (
    
    <Wrap>
        <Backdrop
            clicked={props.modalClosed}
            show={props.show}/>
        <div
            className={css.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity:   props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Wrap>
);

export default modal;
