import React from 'react';
import ReactDOM from 'react-dom';

const item1 = React.createElement('li', {className: 'item'}, 'Item 1');
const item2 = React.createElement('li', {className: 'item'}, 'Item 2');

const list = React.createElement('ul', {}, [item1, item2]);

ReactDOM.render(list, document.body);
