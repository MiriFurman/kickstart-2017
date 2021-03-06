import React, {Component} from 'react';
import './App.scss';
import Footer from '../footer/Footer';
import WidgetsArea from '../widgetsArea/WidgetsArea';
import ReportArea from '../reportArea/ReportArea';
import constants from '../../constants';

const staticBaseUrl = window.__STATICS_BASE_URL__;

class App extends Component {
  constructor() {
    super();
    this.state = {userActions: []};
  }

  reportAction(action) {
    this.setState({userActions: this.state.userActions.concat(action)});
  }

  render() {
    const clearUserActions = () => {
      this.setState({
        userActions: []
      });
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={`${staticBaseUrl}/assets/logo.svg`} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <div className="main-sections">
          <WidgetsArea reportAction={action => this.reportAction(action)}/>
          <ReportArea userActions={this.state.userActions}/>
        </div>
        <Footer
          clearUserActions={clearUserActions}
          transitionDelay={constants.TRANSITION_DURATION}
          />
      </div>
    );
  }
}

export default App;
