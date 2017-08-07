import React from 'react';

class MandatoryInput extends React.Component {
    render() {
        return <span>
                <input type={this.props.type || "text"}
                value={this.props.value} onChange={this.props.onChange} />
                <span className={!this.props.value ? "input-error" : "input-ok"} title="Mandatory field">*</span>
            </span>
    }
}

export default MandatoryInput;