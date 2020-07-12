import React    from 'react';

import css      from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => 
(
    <ul className={css.NavigationItems}>
        <NavigationItem active link="/" >
           Burger Builder 
        </NavigationItem>
        <NavigationItem active link="/" >
           Checkout 
        </NavigationItem>
    </ul>

);

export default navigationItems;