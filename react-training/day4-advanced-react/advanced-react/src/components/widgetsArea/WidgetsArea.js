import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import {keys, some} from 'lodash/fp';
import RotatingWidget from '../rotatingWidget/RotatingWidget';
import ExpandingWidget from '../expandingWidget/ExpandingWidget';

const WidgetsArea = createReactClass({
  displayName: 'WidgetsArea',
  propTypes: {
    reportAction: PropTypes.func.isRequired
  },
  shouldComponentUpdate(nextProps) {
    return some(key => nextProps[key] !== this.props[key], keys(nextProps));
  },
  render() {
    return (
      <div className="widgets-area">
        <RotatingWidget reportAction={this.props.reportAction}/>
        <div className="separator"/>
        <ExpandingWidget reportAction={this.props.reportAction}/>
      </div>);
  }
});

export default WidgetsArea;
