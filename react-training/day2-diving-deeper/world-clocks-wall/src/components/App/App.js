import React, { Component } from 'react';
import './App.scss';
import {translate} from 'react-i18next';
import PropTypes from 'prop-types';

class ClockItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      time: '',
      city: props.city,
      tempName: props.city
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.calcTime(this.props.timezone), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  calcTime(offset) {
    const d = new Date();
    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    const utc = d.getTime() - (d.getTimezoneOffset() * 60000);
    // create new Date object for different city
    // using supplied offset
    const nd = new Date(utc + (3600000*offset));
    // return time as a string
    this.setState({time: nd.toLocaleTimeString()})
  }

  editModeOn(){
    this.setState({editMode: true});
  }

  editClock(){
    this.setState({city: this.input.value ? this.input.value : this.state.city, editMode:false});
  }


  render() {
    if (this.state.editMode) {
      return (
        <div className="clock-container">
          <div className="clock-time">{this.state.time}</div>
          <input className="clock-city-input" type="text" id="city-input" name="city-input" placeholder={this.state.city} ref={(input) => this.input = input}/>
          <div className="clock-actions">
            <button className="clock-done-btn" onClick={() => this.editClock()}>Done</button>
          </div>
        </div>
      );
    }
    return (
      <div className="clock-container">
        <div className="clock-time">{this.state.time}</div>
        <div className="clock-city">{this.state.city}</div>
        <div className="clock-actions">
          <button className="clock-remove-btn">Remove</button>
          <button className="clock-edit-btn" onClick={() => this.editModeOn()}>Edit</button>
        </div>
      </div>
    );
  }
}

class ClockList extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.clocks !== nextProps.clocks;
  // }

  render() {
    return (
      <ul>
        {this.props.clocks.map(clock => <ClockItem key={clock.id} city={clock.city} timezone={clock.timezone}/>)}
      </ul>
    );
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      userInput: '',
      clocks: [{city: 'Jerusalem', timezone: '3', id: '1'}, {city: 'New York', timezone: '-4', id: '2'}]
    }
  }

  addClock() {
    if (this.inputCity && this.inputTimezone) {
      const updatedItems = [...this.state.clocks, {city: this.inputCity.value, timezone: this.inputTimezone.value, id: Date.now()}];
      this.setState({clocks: updatedItems});
    }
  }

  render() {
    return (
      <div className="App">
        <h1>World Clocks</h1>
        <div>
          Add a Clock
          <input type="text" placeholder="City Name" ref={(input) => this.inputCity = input}/>
          <input type="number" name="timezone" placeholder="0" ref={(input) => this.inputTimezone = input}/>
          <button onClick={() => this.addClock()}>Add Clock</button>
        </div>
        <ClockList clocks={this.state.clocks}/>
      </div>
    );
  }
}

App.propTypes = {
  t: PropTypes.func
};

export default translate(null, {wait: true})(App);
