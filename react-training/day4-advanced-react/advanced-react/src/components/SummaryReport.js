import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import createReactClass from 'create-react-class';

const ActionReport = createReactClass({
  displayName: 'actionReport',
  propTypes: {
    actionsGroup: PropTypes.arrayOf(
      PropTypes.shape({
        widget: PropTypes.string,
        source: PropTypes.string,
        time: PropTypes.string,
        value: PropTypes.number
      })).isRequired
  },
  getInitialState() {
    return {};
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
  renderTooltip() {
    return (
      <div
        className="action-tooltip" ref={tooltip => {
          this.tooltipElm = tooltip;
        }}
                                   >I'm a tooltip</div>
    );
  },
  componentDidUpdate() {
    if (!this.refs.tooltip) {
      return;
    }
    const summaryElm = ReactDOM.findDOMNode(this);
    const actionBoundingRect = summaryElm.getBoundingClientRect();
    const tooltipBoundingRect = this.refs.tooltip.getBoundingClientRect();

    if (this.refs.tooltip) {
      this.refs.tooltip.style.top = `${actionBoundingRect.height}px`;
      this.refs.tooltip.style.left = `${(actionBoundingRect.width / 2) - (tooltipBoundingRect.width / 2)}px`;
    }
  },
  render() {
    const actionsInfo = {
      widgetsCount: _(this.props.actionsGroup).map('widget').uniq().length
    };
    return (
      <div className="action-report">
        <div
          className="action-content"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          >
          <span>Widgets count: {actionsInfo.widgetsCount}</span>
        </div>
        {this.state.mouseHover ? this.renderTooltip() : null}
      </div>
    );
  }
});

export default ActionReport;
