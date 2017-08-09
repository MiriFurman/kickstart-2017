/**
 * Created by mirif on 09/08/2017.
 */
import React from 'react';

function WithProps(propsGetter, Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const newProps = Object.assign({}, this.props, propsGetter());
      return <Component {...newProps} />;
    }
  };
}

export default WithProps;
