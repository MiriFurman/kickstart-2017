import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

const OddButton = createReactClass({
  PropTypes: {
    date: PropTypes.object.isRequired
  },
  render() {
    return (
      <div className="odd-button">
        <button disabled={!(this.props.date.getDay() % 2)}>I am an Odd Button</button>
      </div>
    );
  }
});

export default OddButton;
