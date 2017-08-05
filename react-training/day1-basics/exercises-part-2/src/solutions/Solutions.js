import React from 'react';

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
  return <div className='todo-item' style={{textDecoration}}>{props.title}</div>;
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
    <SpecialButton onClick={onRemove(true)} onSpecialClick={onRemove(false)}>🗑</SpecialButton>
    <TodoItem title={props.title} done={props.done}/>
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

export const TodoApp = props => {
  return (<div className='todo-app'>
    {
      props.items.map((item, idx) => {
        return <TodoItem2 key={idx} {...item} onRemove={() => props.onRemove(idx)}/>;
      })
    }
    <button onClick={() => props.onAddItem(prompt('What do u wanna add?'))}>Add item</button>
  </div>);
};
