import React from 'react';
import _ from 'lodash';

class FormRow extends React.Component {
    render() {
        let children = this.props.children;
        if (_.isArray(children)) {
            children = _.map(children, (c, i) => <span key={i} className='form-row-col'>{c}</span>);
        }
        return <div>{children}</div>;
    }
}

export default FormRow;
