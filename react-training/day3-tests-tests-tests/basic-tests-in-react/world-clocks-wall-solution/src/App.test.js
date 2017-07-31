import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {expect} from 'chai';

describe('App tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('dummy Mocha-Chai test', () => {
    const x = 1;
    const y = 2;
    const z = x + y;

    expect(z).to.eq(3);
  });
});

