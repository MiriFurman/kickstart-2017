import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.css';

import Menu from './menu';
import SimpleForm from './ex1/ex1';
import AddressForm from './ex2/addressForm';

const getID = (() => {
  let counter = 0; 
  return () => ++counter;
})();

const MENU_ITEMS = {
  SIMPLE_FORM: {
    id: getID(),
    text: 'Simple Form',
    comp: SimpleForm,
    onClick: null
  },
  ADDRESS_FORM: {
    id: getID(),
    text: 'Address Form',
    comp: AddressForm,
    onClick: null
  }
};

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      viewComp: null,
      items: _.map(MENU_ITEMS, (item) => Object.assign(item, {onClick: this.updateViewComp.bind(this, item.comp)}))
    };
  }

  updateViewComp(comp) {
    this.setState({viewComp: comp});
  }

  render() {
    return <div>
      <h1>My React Application Yippie</h1>
      <div>
        <Menu items={this.state.items} />
        {this.state.viewComp ? <this.state.viewComp /> : null}
      </div>
    </div>;
  }
}

window.app = ReactDOM.render(<App />, document.getElementById('root'));
