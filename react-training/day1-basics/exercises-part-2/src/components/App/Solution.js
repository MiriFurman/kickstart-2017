import React from 'react';


// Components from Part 2


export const Title = props => {
  return <h1>{props.text}</h1>;
};

export const ImageView = props => {
  return (<div className='image-view'>
    <figure><img src={props.src}/></figure>
    <figcaption>{props.caption}</figcaption>
  </div>);
};

export const SimpleGallery = props => {
  return (<div className='simple-gallery'>
    {props.images.map((img, idx) => <ImageView src={img} caption={img} key={idx}/>)}
  </div>);
};

export const Heading = props => {
  return <div><Title text={props.title}/><h2>{props.subtitle}</h2></div>;
};


export const TodoItem = props => {
  const textDecoration = props.done ? 'line-through' : '';
  return <div className='todo-item' style={{textDecoration}} onClick={props.onToggle}>{props.title}</div>;
};

export const Framer = props => {
  return (<div className='framer' style={{background: props.color}}>
    <div className='content'>
      {props.children}
    </div>
    <div className='caption'>{props.caption}</div>
  </div>);
};

export const SimpleCanvas = props => {
  return (<div className='simple-canvas'>
    {
      props.data.map((row, idx) => {
        return (<div className='row' key={idx}>
          {
            row.map((cell, cellIdx) => {
              return <div className='cell' key={cellIdx} style={{background: cell}}/>;
            })
          }
        </div>);
      })}
  </div>);
};

export const SpecialButton = props => {

  const onClick = e => {
    if (e.ctrlKey || e.metaKey) {
      props.onSpecialClick();
    } else {
      props.onClick();
    }
  };
  return <button onClick={onClick}>{props.children}</button>;
};


export const TodoItem2 = props => {
  const onRemove = shouldConfirm => () => {
    if (!shouldConfirm || confirm('Are you sure?')) {
      props.onRemove();
    }
  };

  return (<div className='todo-item-2'>
    <TodoItem onToggle={props.onToggle} title={props.title} done={props.done}/>
    <SpecialButton onClick={onRemove(true)} onSpecialClick={onRemove(false)}>🗑</SpecialButton>
  </div>);
};

export const SimpleCanvas2 = props => {
  return (<div className='simple-canvas'>
    {
      props.data.map((row, idx) => {
        return (<div className='row' key={idx}>
          {
            row.map((cell, cellIdx) => {
              return (<div
                onClick={() => props.onCellClick(idx, cellIdx, cell)}
                className='cell'
                key={cellIdx}
                style={{background: cell}}
                />);
            })
          }
        </div>);
      })}
  </div>);
};

export const TodoAppView = props => {
  return (<div className='todo-app'>
    {
      props.items.map((item, idx) => {
        return (<TodoItem2
          key={idx} {...item}
          onToggle={() => props.onToggle(idx)}
          onRemove={() => props.onRemove(idx)}
          />);
      })
    }
    <button className='add' onClick={() => props.onAddItem(prompt('What do u wanna add?'))}>Add item</button>
  </div>);
};


// End of components from part 2

export class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: [
    ]};
  }

  onAdd(item) {
    const items = this.state.items;
    this.setState({items: [...items, {title: item, done: false}]});
  }

  onToggle(idx) {
    const items = this.state.items;
    items[idx].done = !items[idx].done;
    this.setState({items});
  }

  onRemove(idx) {
    const items = this.state.items.filter((_, i) => i !== idx);
    this.setState({items});
  }

  render() {
    return (<div>
      <h1>Todo App</h1>
      <TodoAppView
        items={this.state.items}
        onToggle={idx => this.onToggle(idx)}
        onAddItem={item => this.onAdd(item)}
        onRemove={idx => this.onRemove(idx)}
      />
    </div>);
  }
}
