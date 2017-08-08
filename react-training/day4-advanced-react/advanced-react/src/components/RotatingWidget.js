import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import utils from '../utils/utils';

const {getCurrentTime} = utils;

const RotatingWidget = createReactClass({
  displayName: 'RotatingWidget',
  propTypes: {
    reportAction: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      angle: 0
    };
  },
  getCurrentValue() {
    return this.state.angle;
  },
  handleMouseEnter() {
    this.props.reportAction({widget: this.constructor.displayName, source: 'mouseEnter', time: getCurrentTime(), value: this.getCurrentValue()});
    this.setState({mouseHover: true});
  },
  handleMouseLeave() {
    this.props.reportAction({widget: this.constructor.displayName, source: 'mouseLeave', time: getCurrentTime(), value: this.getCurrentValue()});
    this.setState({mouseHover: false});
  },
  isHovering() {
    return this.state.mouseHover;
  },
  updateAngle(angle, source) {
    this.setState({angle: angle % 360});
    if (source) {
      this.props.reportAction({widget: this.constructor.displayName, source, time: getCurrentTime(), value: angle});
    }
  },
  componentDidUpdate() {
    if (this.state.mouseHover) {
      const currentAngle = this.state.angle;
      setTimeout(() => {
        this.updateAngle(currentAngle + 5);
      }, 50);
    }
  },
  render() {
    return (
      <div className="rotating-widget">
        <div className="controls">
          <input
            type="number"
            step="5"
            min="0"
            max="360"
            value={this.state.angle}
            onChange={e => this.updateAngle(parseInt(e.target.value, 10), 'input')}
            />
          <button onClick={() => this.updateAngle(0, 'reset')}>Reset</button>
        </div>
        <div
          className="visual"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          style={{transform: `rotate(${this.state.angle}deg)`}}
          >
          <div className="first wing"/>
          <div className="second wing"/>
          <div className="third wing"/>
        </div>
      </div>
    );
  }
});

export default RotatingWidget;
