import React from 'react';

class SimpleForm extends React.Component {

    constructor(){
        super();
        this.state = {
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleFormSubmit(e) {
        console.log('SimpleForm data to submit:', JSON.stringify(this.state, null, 2));
        e.preventDefault();
    }

    render() {
        return <form onSubmit={this.handleFormSubmit}>
            <input type="text" value={this.state.name} onChange={this.handleChange} />
            <button type="submit" disabled={this.state.name.length < 3}>Submit</button>
        </form>;
    }
}

export default SimpleForm;