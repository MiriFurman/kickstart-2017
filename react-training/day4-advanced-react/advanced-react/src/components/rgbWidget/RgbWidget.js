import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import utils from '../../utils/utils';
import constants from '../../constants';
const {getCurrentTime} = utils;

const RgbWidget = createReactClass({
  displayName: 'RgbWidget',
  propTypes: {
    reportAction: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      color: {
        red: 0,
        blue: 0,
        green: 0
      }
    };
  },
  getCurrentValue() {
    return `(${this.state.color.red},${this.state.color.blue},${this.state.color.green})`;
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
  updateColor(value, color, source) {
    this.state.color[color] = value;
    this.setState({color: this.state.color});
    if (source) {
      this.props.reportAction({widget: this.constructor.displayName, source, time: getCurrentTime(), value: JSON.stringify(this.state.color)});
    }
  },
  updateAllColors(red, blue, green){
    this.state.color.red = red;
    this.state.color.blue = blue;
    this.state.color.green = green;
    this.setState({color: this.state.color});
  },
  resetColor() {
    this.updateColor(0, 'red', 'reset');
    this.updateColor(0, 'blue', 'reset');
    this.updateColor(0, 'green', 'reset');
  },
  componentDidUpdate() {
    if (this.isHovering()) {
      const currentColor = this.state.color;
      setTimeout(() => {
        this.updateAllColors( currentColor.red < 255 ? currentColor.red + 1 : 0,
                              currentColor.blue < 254 ? currentColor.blue + 2 : 0,
                              currentColor.green < 253 ? currentColor.green + 3 : 0);
      }, constants.WIDGET_DELAY);
    }
  },
  render() {
    return (
      <div className="rgb-widget">
        <div className="controls">
          <input className="inputRed" type="number" step="1" min="0" max="255" value={this.state.color.red} onChange={e => this.updateColor(parseInt(e.target.value, 10), 'red', 'inputRed')}/>
          <input type="number" step="1" min="0" max="255" value={this.state.color.blue} onChange={e => this.updateColor(parseInt(e.target.value, 10), 'blue', 'inputBlue')}/>
          <input type="number" step="1" min="0" max="255" value={this.state.color.green} onChange={e => this.updateColor(parseInt(e.target.value, 10), 'green', 'inputGreen')}/>
          <button onClick={() => this.resetColor()}>Reset</button>
        </div>
        <div className="visual" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}
             style={{backgroundColor: `rgb(${this.state.color.red}, ${this.state.color.blue}, ${this.state.color.green})`}}>
        </div>
      </div>
    );
  }

});

export default RgbWidget;
