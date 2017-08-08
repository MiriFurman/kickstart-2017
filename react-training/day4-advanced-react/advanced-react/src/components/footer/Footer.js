import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import ContactUs from '../contactUs/ContactUs';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Footer = createReactClass({
  getInitialState() {
    return {};
  },
  propTypes: {
    clearUserActions: PropTypes.func.isRequired,
    transitionDelay: PropTypes.number.isRequired
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
    const isHovering = this.isHovering();
    return (
      <div
        className={`Footer ${isHovering ? 'mouse-over-footer' : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <div className="footer-content">
          <span>My cool footer content</span>
        </div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={this.props.transitionDelay}
          transitionLeaveTimeout={this.props.transitionDelay}
          >
          {this.state.mouseHover ? (<div className="contact-container"><ContactUs key="ContactUs"/></div>) : null}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={this.props.transitionDelay}
          transitionLeaveTimeout={this.props.transitionDelay}
          >{isHovering ? (<div className="clear-button">
            <button className="clear-actions-button" onClick={this.props.clearUserActions}>Clear Log</button>
          </div>) : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Footer;
