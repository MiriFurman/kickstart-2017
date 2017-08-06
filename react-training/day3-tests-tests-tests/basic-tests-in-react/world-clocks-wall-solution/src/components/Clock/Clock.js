import React from 'react';
import createLocation from '../../location';
import PropTypes from 'prop-types';

const MINUTES_IN_MS = 1000 * 60;
const HOURS_IN_MS = MINUTES_IN_MS * 60;

class Clock extends React.Component {

  constructor({location}) {
    super();
    this.state = {
      isEditMode: false,
      tempLabel: location.label,
      tempTimeZone: location.timeZone
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.onLabelUpdate = this.onLabelUpdate.bind(this);
  }

  toggleEdit() {
    const isEditing = !this.state.isEditMode;
    if (!isEditing) {
      this.props.onLocationUpdate(this.props.location.id, createLocation(this.state.tempLabel, this.state.tempTimeZone));
    }
    this.setState({
      isEditMode: isEditing
    });
  }

  componentDidUpdate() {
    if (this.state.isEditMode) {
      this.labelInput.focus();
    }
  }

  onLabelUpdate(e) {
    this.setState({
      tempLabel: e.target.value
    });
  }

  render() {
    const d = new Date(this.props.timeInMs);
    const minutesOffset = d.getTimezoneOffset();
    const utcTime = this.props.timeInMs + (minutesOffset * MINUTES_IN_MS);
    const timeForLocation = utcTime + (this.props.location.timeZone * HOURS_IN_MS);

    return (
      <div className="clock">
        <div className="clock-digits">{new Date(timeForLocation).toLocaleTimeString()}</div>
        <div className="clock-label">
          {
            this.state.isEditMode ?
              <input
                type="text"
                value={this.state.tempLabel}
                onChange={this.onLabelUpdate}
                ref={labelInput => this.labelInput = labelInput}
              /> :
              this.props.location.label
          }
        </div>
        {
          this.state.isEditMode ?
            null :
            <button className="remove-button" onClick={this.props.onRemove}>Remove</button>
        }
        <button onClick={this.toggleEdit}>{this.state.isEditMode ? 'Done' : 'Edit'}</button>
      </div>
    );
  }
}

Clock.propTypes = {
  onRemove: PropTypes.func,
  onLocationUpdate: PropTypes.func,
  timeInMs: PropTypes.number,
  location: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    timeZone: PropTypes.number
  }),
};

export default Clock;
