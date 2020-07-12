import React  from 'react';

import css          from './Layout.module.css';
import Toolbar      from '../Navigation/Toolbar/Toolbar';
import Wrap         from '../../hoc/Wrap';

const layout = (props) =>
(
    <Wrap>
        <Toolbar/>
        <main className={css.Content}>
            {props.children}
        </main>
    </Wrap>
);

export default layout;