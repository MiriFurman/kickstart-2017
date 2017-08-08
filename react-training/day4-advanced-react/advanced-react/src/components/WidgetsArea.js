import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import _ from 'lodash';
import RotatingWidget from './RotatingWidget';
import ExpandingWidget from './ExpandingWidget';

const WidgetsArea = createReactClass({
  displayName: 'WidgetsArea',
  propTypes: {
    reportAction: PropTypes.func.isRequired
  },
  shouldComponentUpdate(nextProps) {
    return _.some(_.keys(nextProps), key => nextProps[key] !== this.props[key]);
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
