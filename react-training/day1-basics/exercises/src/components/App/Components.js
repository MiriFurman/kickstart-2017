import React from 'react';

export const Title = props => {
  return <h1>{props.text}</h1>;
};

export const SimpleGallery = props => {
  return <div>TODO</div>;
};

export const Heading = props => {
  return <div><Title text={props.title}><h2>{props.subtitle}</div>;
}
