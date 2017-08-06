import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {expect} from 'chai';

// import your components here

describe('Clock Component', () => {
  it('should render the passed Label of the Clock equals to Tel Aviv', () => {
    const clockLabel = '';
    // create a clock, and set its label to Tel Aviv
    expect(clockLabel).to.eq('Tel Aviv');
  });
});
