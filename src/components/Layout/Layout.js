import React  from 'react';

import Wrap         from '../../hoc/Wrap';
import cssClasses   from './Layout.module.css';


console.log( "Layout.js]" +  cssClasses.Content );

const layout = (props) =>
(
    <Wrap>
        <div>
            Toolbar,
            SideDrawer,
            BackDrop
        </div>
        <main className={cssClasses.Content}>
            {props.children}
        </main>
    </Wrap>
);

export default layout;