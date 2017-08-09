import React from 'react';
import withProps from '../withProps/WithProps';
import OddButton from './OddButton';

const OddButtonWithCurrentDate = withProps(() => {
  return {date: new Date()};
}, OddButton);

export default OddButtonWithCurrentDate;
