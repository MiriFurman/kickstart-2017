import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import ContactUs from './ContactUs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Footer = createReactClass({
  getInitialState() {
    return {};
  },
  propTypes: {
    clearUserActions: PropTypes.func
  },
  handleMouseEnter() {
    this.setState({mouseHover: true});
  },
  handleMouseLeave() {
    this.setState({mouseHover: false});
  },
  isHovering() {
    return this.state.mouseHover;
  },
  render() {
    return (
      <div
        className={`Footer ${this.state.mouseHover ? 'mouse-over-footer' : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <div className="footer-content">
          <span>My cool footer content</span>
        </div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={450}
          transitionLeaveTimeout={450}
          >
          {this.state.mouseHover ? (<div className="contact-container"><ContactUs key="ContactUs"/></div>) : null}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={450}
          transitionLeaveTimeout={450}
          >{this.state.mouseHover ? (<div className="clear-button">
            <button onClick={this.props.clearUserActions}>Clear Log</button>
          </div>) : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Footer;
