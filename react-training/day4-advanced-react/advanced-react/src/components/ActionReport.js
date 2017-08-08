import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'

const ActionReport = createReactClass({
    displayName: 'actionReport',
    propTypes: {
        action: PropTypes.shape({
            widget: PropTypes.string,
            source: PropTypes.string,
            time: PropTypes.string,
            value: PropTypes.number
        }).isRequired
    },
    getInitialState() {
        return {
            showTooltip: false
        }
    },
    handleMouseEnter() {
        this.setState({mouseHover: true})
    },
    handleMouseLeave() {
        this.setState({mouseHover: false})
    },
    isHovering() {
        return this.state.mouseHover
    },
    renderTooltip() {
        return (
            <div className="action-tooltip" ref="tooltip">Action Time: {this.props.action.time}</div>
        )
    },
    componentDidUpdate() {
        if (!this.refs.tooltip) {
            return;
        }
        const actionElm = ReactDOM.findDOMNode(this)
        const actionBoundingRect = actionElm.getBoundingClientRect()
        const tooltipBoundingRect = this.refs.tooltip.getBoundingClientRect()

        if (this.refs.tooltip) {
            this.refs.tooltip.style.top = `${actionBoundingRect.height}px`
            this.refs.tooltip.style.left = `${(actionBoundingRect.width / 2) - (tooltipBoundingRect.width / 2)}px`
        }

    },
    render() {
        return (
            <div className="action-report">
                <div className="action-content"
                     onMouseEnter={this.handleMouseEnter}
                     onMouseLeave={this.handleMouseLeave}>
                    <span>Widget: {this.props.action.widget}</span>
                    <span>Source: {this.props.action.source}</span>
                    <span>New Value: {this.props.action.value}</span>
                </div>
                {this.state.mouseHover ? this.renderTooltip() : null}
            </div>
        )
    }
})

export default ActionReport
