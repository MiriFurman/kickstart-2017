import React from 'react';

export const Title = props => {
  return <h1>{props.text}</h1>;
};

export const Heading = props => {
  return (<div>
    <Title text={props.title}/>
    { props.subtitle ? <h2>{props.subtitle}</h2> : null }
  </div>);
};

export const ImageView = props => {
  return (<figure className="image-view">
      <img src={props.src}/>
      { props.caption ? <figcaption>{props.caption}</figcaption> : null }
    </figure>
  );
};

export const SimpleGallery = props => {
  return (<div>
    { props.images.map(img => <ImageView src={img}/>) }
  </div>);
};

export const TodoItem = props => {
  const isDone = props.done ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
  return <div style={isDone}> {props.title} </div>
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
  return (<div className="simple-canvas">
    { props.data.map((row) =>  <div className="row">
      { row.map((color) => <div className="cell" style={{backgroundColor: color}}></div>)}
    </div>)
    }
  </div>);
};

export const SpecialButton = props => {
  const onClick = e => {
    if (e.shiftKey || e.ctrlKey || e.metaKey) {
      props.onSpecialClick();
    } else {
      props.onClick();
    }
  };
  return <button onClick={onClick}>{props.children}</button>;
};

export const TodoItem2 = props => {
  const onClick = () => {
    if (confirm("are you sure you want to remove?")) {
      props.onRemove();
    }
  };
  return (<div>
    <TodoItem title={props.title} done={props.completed}/>
    <SpecialButton children="🗑" onClick={onClick} onSpecialClick={props.onRemove}/>
  </div>);
};

export const SimpleCanvas2 = props => {
  return (<div className="simple-canvas">
    { props.data.map((row,indexRow) =>  <div className="row">
      { row.map((color,indexCol) => <div className="cell" style={{backgroundColor: color}} onClick={e => props.onCellClick(indexRow,indexCol,color)}></div>)}
    </div>)
    }
  </div>);
};

export const TodoApp = props => {
  const onAddItem = () => {
    const title = prompt("what is the item title?");
    if (title) {
      props.onAddItem(title);
    }
  };
  return (<div>
    { props.items.map(item => <TodoItem2 title={item.title} completed={item.done} onRemove={props.onRemove}/>) }
    <button onClick={onAddItem}>Add item</button>
  </div>);
};


