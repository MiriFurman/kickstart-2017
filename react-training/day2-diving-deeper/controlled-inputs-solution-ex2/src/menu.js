import React from 'react';
import _ from 'lodash';

const Menu = ({items}) => {
    return <ul>
        {_.map(items, (item, i) => <li key={item.id} onClick={item.onClick}><u>{item.text}</u></li>)}
    </ul>;
}

export default Menu;