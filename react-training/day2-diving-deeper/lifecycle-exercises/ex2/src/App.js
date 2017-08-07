import React, { Component } from 'react';
import './App.css';

class Item extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value;
  }

  render() {
    console.log('Rendering Item', this.props.value);
    return <div>{this.props.value}</div>;
  }
}

class ItemList extends Component {

  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.items !== nextProps.items;
  }


  render() {
   return (
     <ul>
      {this.props.items.map(item => <Item key={item} value={item} />)}
     </ul>
   );
  }
}

class ListApp extends Component {

  constructor() {
    super();
    this.state = {
      userInput: '',
      items: Array(10000).fill(1).map((v, i) => `Item ${i+1}`)
    }
  }

  addItem() {
    if (this.state.userInput) {
      const updatedItems = [this.state.userInput].concat(this.state.items);
      this.setState({items: updatedItems}, ()=> {
        this.setState({userInput: ''});
      });
    }
  }

  updateUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div>
          Enter new Item:
          <input type="text" value={this.state.userInput} onChange={(e) => this.updateUserInput(e)} />
          <button onClick={e => this.addItem()}>Add</button>
        </div>
        <ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default ListApp;
