import React, { Component } from 'react';
import * as s from './App.scss';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

export class Utils {

  static calcTime(offset) {
    const d = new Date();
    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    // create new Date object for different city
    // using supplied offset
    const nd = new Date(utc + (3600000*offset));
    // return time as a string
    return nd.toLocaleTimeString();
  }

}

//can remove the time to other component

export class ClockItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      time: Utils.calcTime(props.timezone),
      city: props.city
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.setTime(this.props.timezone), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  setTime(offset) {
    const time = Utils.calcTime(offset);
    this.setState({time: time});
  }

  editModeOn(){
    this.setState({editMode: true});
  }

  editClock(){ // TODO - 08/08/2017 -  refactor - move to father, remove from state
    this.setState({city: this.input.value ? this.input.value : this.state.city, editMode:false});
  }


  render() {
    if (this.state.editMode) {
      return (
        <div className={s.clockItem}>
          <div className={s.clockTime}>{this.state.time}</div>
          <input className={s.clockCityInput} type="text" id="city-input" name="city-input" placeholder={this.state.city} ref={(input) => this.input = input}/>
          <div>
            <button className={s.clockDoneBtn} onClick={() => this.editClock()}>Done</button>
          </div>
        </div>
      );
    }
    return (
      <div className={s.clockItem}>
        <div className={s.clockTime}>{this.state.time}</div>
        <div className={s.clockCity}>{this.state.city}</div>
        <div>
          <button className={s.clockRemoveBtn} onClick={() => this.props.onRemove()}>Remove</button>
          <button className={s.clockEditBtn} onClick={() => this.editModeOn()}>Edit</button>
        </div>
      </div>
    );
  }
}

export class ClockList extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.clocks !== nextProps.clocks;
  // }

  render() {
    return (
      <ul className={s.clocksList}>
        {this.props.clocks.map(clock => <ClockItem key={clock.id} city={clock.city} timezone={clock.timezone} onRemove={() => this.props.removeClock(clock.id)}/>)}
      </ul>
    );
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      userInput: '',
      clocks: [{city: 'Jerusalem', timezone: '3', id: '1'}, {city: 'New York City', timezone: '-4', id: '2'},
        {city: 'London', timezone: '0', id: '3'}, {city: 'Tokyo', timezone: '9', id: '4'}]
    }
  }

  addClock() {
    if (this.inputCity && this.inputTimezone) {
      const updatedItems = [...this.state.clocks, {city: this.inputCity.value, timezone: this.inputTimezone.value, id: Date.now()}];
      this.setState({clocks: updatedItems});
    }
  }

  removeClock(id) {
    this.state.clocks = this.state.clocks.filter(clock => clock.id !== id);
    this.setState({clocks: this.state.clocks});
  }

  render() {
    return (
      <div className={s.app}>
        <h1>World Clocks</h1>
        <div>
          <h3>Add a Clock</h3>
          <form>
            <input type="text" placeholder="City Name" ref={(input) => this.inputCity = input}/>
            <label htmlFor="timezone">TimeZone</label>
            <input type="number" name="timezone" id="timezone" placeholder="0" ref={(input) => this.inputTimezone = input}/>
            <button onClick={() => this.addClock()}>Add Clock</button>
          </form>
        </div>
        <ClockList clocks={this.state.clocks} removeClock={(id) => this.removeClock(id)}/>
      </div>
    );
  }
}

ClockItem.propTypes = {
  city: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

ClockList.propTypes = {
  clocks: PropTypes.array.isRequired,
  removeClock: PropTypes.func.isRequired
};

App.propTypes = {

};

export default translate(null, {wait: true})(App);
