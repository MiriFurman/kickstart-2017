import React from 'react';

export class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  addClick(){
    this.setState({value: this.state.value + 1});
  }

  removeClick(){
    this.setState({value: this.state.value - 1});

  }

  render() {
    return <div>{this.state.value}<button onClick={() => this.addClick()}>+</button><button onClick={() => this.removeClick()}>-</button></div>;
  }
}

const ImageView = props => {
  return (<figure className="image-view">
      <img src={props.src}/>
      { props.caption ? <figcaption>{props.caption}</figcaption> : null }
    </figure>
  );
};

const SimpleGallery = props => {
  return (<div>
    { props.images.map(img => <ImageView src={img}/>) }
  </div>);
};

export class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {images: ["https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
    "http://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Backbone.js_logo.svg/2000px-Backbone.js_logo.svg.png"]};
  }

  addImage(){
    const src = prompt("what is the image src?");
    if (src) this.setState({images: [...this.state.images, src]});
  }

  render() {
    return <div>
      <SimpleGallery images={this.state.images}/>
      <button onClick={() => this.addImage()}>Add Image</button>
    </div>;
  }
}

export class CanvasV2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        ['red', 'white', 'gray', 'orange'],
        ['green', 'yellow', 'gray', 'purple'],
        ['red', 'white', 'yellow', 'green'],
        ['red', 'green', 'gray', 'purple']
      ],
      colors: ['red', 'white', 'gray', 'orange','green', 'yellow', 'purple']
    }
  }

  onCellClick(indexRow,indexCol,color){
    const nextColorIndex = this.state.colors.indexOf(color) + 1;
    const nextColor = nextColorIndex === this.state.colors.length ? this.state.colors[0] : this.state.colors[nextColorIndex];
    this.state.data[indexRow][indexCol] = nextColor;
    this.setState({data: this.state.data});
  }

  render(){
    return (<div className="simple-canvas">
      { this.state.data.map((row,indexRow) =>  <div className="row">
        { row.map((color,indexCol) => <div className="cell" style={{backgroundColor: color}} onClick={e => this.onCellClick(indexRow,indexCol,color)}></div>)}
      </div>)
      }
    </div>);
  }
}

const TodoItem = props => {
  const isDone = props.done ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
  return <div style={isDone} onClick={props.toggleDone}> {props.title} </div>
};

const SpecialButton = props => {
  const onClick = e => {
    if (e.shiftKey || e.ctrlKey || e.metaKey) {
      props.onSpecialClick();
    } else {
      props.onClick();
    }
  };
  return <button onClick={onClick}>{props.children}</button>;
};

const TodoItem2 = props => {
  const onClick = () => {
    if (confirm("are you sure you want to remove?")) {
      props.onRemove();
    }
  };

  return (<div>
    <TodoItem title={props.title} done={props.done} toggleDone={props.toggleDone}/>
    <SpecialButton children="🗑" onClick={onClick} onSpecialClick={props.onRemove}/>
  </div>);
};

export class WorkingTodoApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      doneFilter: '',
      input: ''
    }
  }

  onAddItem() {
    const title = prompt("what is the item title?");
    if (title) {
      this.setState({items: [...this.state.items, {title: title, done: false}]});
    }
  }

  onRemove(index) {
    this.state.items.splice(index,1);
    this.setState({items: this.state.items});
  }

  toggleDone(index) {
    this.state.items[index].done = !this.state.items[index].done;
    this.setState({items: this.state.items});
  };

  filterItems(e) {
    this.setState({doneFilter: e.target.value})
  }

  filterItemsByTitle(e) {
    this.setState({input: e.target.value})
  }

  getFilteredItems(){
    return this.state.items
      .filter(item => this.state.doneFilter === '' || item.done.toString() === this.state.doneFilter)
      .filter(item => this.state.input === 'all' || item.title.includes(this.state.input));
  }

  render() {
    return (<div>
      <input type="text" name="filterItems" value={this.state.input} onChange={(e) => this.filterItemsByTitle(e)}/>
      <select onChange={(e) => this.filterItems(e)}>
        <option value="">All</option>
        <option value="true">Only Completed</option>
        <option value="false">Only Incomplete</option>
      </select>
      { this.getFilteredItems()
        .map((item,index) => <TodoItem2 title={item.title} done={item.done} onRemove={() => this.onRemove(index)} toggleDone={() => this.toggleDone(index)}/>) }
      <div><button onClick={() => this.onAddItem()}>Add item</button></div>
    </div>);
  }
}

