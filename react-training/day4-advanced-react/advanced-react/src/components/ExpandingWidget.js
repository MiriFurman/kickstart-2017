import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import utils from '../utils/utils';

const {getCurrentTime} = utils;
const minWidth = 10;
const maxWidth = 200;
const defaultWidth = (maxWidth - minWidth) / 2;

const ExpandingWidget = createReactClass({
  displayName: 'ExpandingWidget',
  propTypes: {
    reportAction: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      width: defaultWidth
    };
  },
  getCurrentValue() {
    return this.state.width;
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
  updateWidth(width, source) {
    this.setState({width});
    if (source) {
      this.props.reportAction({widget: this.constructor.displayName, source, time: getCurrentTime(), value: width});
    }
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.mouseHover) {
      const delta = 10;
      const currentWidth = this.state.width;
      let currentDirection = Math.sign(currentWidth - prevState.width) || 1;
      const expectedNewWidth = currentWidth + (delta * currentDirection);
      if (expectedNewWidth > maxWidth || expectedNewWidth < minWidth) {
        currentDirection *= -1;
      }
      const newWidth = currentWidth + (delta * currentDirection);

      setTimeout(() => {
        this.updateWidth(newWidth);
      }, 50);
    }
  },
  render() {
    return (
      <div className="expanding-widget">
        <div className="controls">
          <input
            type="range"
            list="tickmarks"
            min={minWidth}
            max={maxWidth}
            value={this.state.width}
            onChange={e => this.updateWidth(parseInt(e.target.value, 10), 'input')}
            />
          <datalist id="tickmarks">
            <option value={minWidth} label="0%"/>
            <option value={defaultWidth} label="50%"/>
            <option value={maxWidth} label="100%"/>
          </datalist>
          <button onClick={() => this.updateWidth(defaultWidth, 'reset')}>Reset</button>
        </div>
        <div
          className="visual"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          >
          <div className="expanding-bar" style={{width: this.state.width}}/>
        </div>
      </div>
    );
  }
});

export default ExpandingWidget;
