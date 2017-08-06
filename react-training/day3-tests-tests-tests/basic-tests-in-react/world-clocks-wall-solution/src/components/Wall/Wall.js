import React from 'react';
import now from 'lodash/now';
import reject from 'lodash/reject';
import findIndex from 'lodash/findIndex';
import map from 'lodash/map';
import Clock from '../Clock/Clock';
import AddClockPanel from '../AddClockPanel/AddClockPanel';
import createLocation from '../../location';
import {bindAll} from '../../helper';

const SECOND = 1000;

class Wall extends React.Component {

  constructor() {
    super();
    this.state = {
      time: now(),
      locations: [createLocation('Jerusalem', 3), createLocation('New York', -5), createLocation('Paris', 1)]
    };

    this.updateTime = this.updateTime.bind(this);
    this.onAddClock = this.onAddClock.bind(this);
    bindAll(this, [this.updateTime, this.onAddClock, this.onLocationUpdate]);
  }

  componentDidMount() {
    this.intervalPID = setInterval(this.updateTime, SECOND);
  }

  onAddClock(location) {
    this.setState({
      locations: [].concat(this.state.locations).concat(location)
    });
  }

  onRemove(clockId) {
    console.log(`removing clock [id] ${clockId}`);
    const updatedLocationsList = reject(this.state.locations, {id: clockId});
    this.setState({
      locations: updatedLocationsList
    });
  }

  onLocationUpdate(locationId, newLocation) {
    const locationIndex = findIndex(this.state.locations, {id: locationId});
    if (locationIndex >= 0) {
      const updatedLocation = this.state.locations[locationIndex];
      updatedLocation.label = newLocation.label;
      updatedLocation.timeZone = newLocation.timeZone;

      const updatedLocations =
        this.state.locations.slice(0, locationIndex)
          .concat(updatedLocation)
          .concat(this.state.locations.slice(locationIndex + 1));

      this.setState({
        locations: updatedLocations
      });
    }
  }

  updateTime() {
    this.setState({time: now()});
  }

  render() {
    return (<div>
      <h1 className="app-title">World Clocks</h1>
      <AddClockPanel onAdd={this.onAddClock}/>
      <div className="clocks-container">
        {
          map(this.state.locations, l =>
            <Clock
              key={l.id}
              timeInMs={this.state.time}
              location={l}
              onRemove={() => this.onRemove(l.id)}
              onLocationUpdate={this.onLocationUpdate}/>)
        }
      </div>
    </div>);
  }
}

export default Wall;
