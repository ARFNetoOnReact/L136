import React from 'react';

import css  from './Toolbar.module.css';
import Logo from '../../NewLogo/NewLogo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) =>
(
    <header className={css.Toolbar}>
        <div> MENU </div>
        <Logo/>
        <nav> 
            <NavigationItems /> 
        </nav>
    </header>
);

export default toolbar;


