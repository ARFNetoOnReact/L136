import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import css from './NewLogo.module.css';

const logo = (props) => 
(
    <div className={css.Logo}>
        <img src={burgerLogo} alt="Burger" />
    </div>
);

export default logo;