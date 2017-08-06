import React, {Component} from 'react';
import createLocation from '../../location';
import {bindAll} from '../../helper';
import PropTypes from 'prop-types';

const getEmptyState = () => ({name: '', timeZone: 0});

class AddClockPanel extends Component {

  constructor() {
    super();
    this.state = getEmptyState();

    bindAll(this, [this.onAddClock, this.updateCityName, this.updateTimeZone]);
  }

  onAddClock() {
    this.props.onAdd(createLocation(this.state.name, this.state.timeZone));
    this.setState(getEmptyState(), () => {
      this.locationRef.focus();
    });
  }

  updateCityName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updateTimeZone(e) {
    this.setState({
      timeZone: Number(e.target.value)
    });
  }

  render() {
    return (
      <div>
        <h4>Add a Clock</h4>
        <div>
          <label htmlFor="locationName">
            <input
              id="locationName"
              placeholder="City Name"
              type="text"
              ref={input => this.locationRef = input}
              value={this.state.name}
              onChange={this.updateCityName}
            />
          </label>
          <label htmlFor="locationTZ">TimeZone
            <input type="number" id="locationTZ" onChange={this.updateTimeZone} value={this.state.timeZone}/>
          </label>
          <button onClick={this.onAddClock}>Add Clock</button>
        </div>
      </div>
    );
  }
}

AddClockPanel.propTypes = {
  onAdd: PropTypes.func
};

export default AddClockPanel;
