import React from 'react';
import _ from 'lodash';

import FormRow from './formRow';
import MandatoryInput from './mandatoryInput';
import Countries from './countries.json';

class AddressForm extends React.Component {
    constructor() {
        super();
        this.state = this.getFreshState();

        this.updaters = _.mapValues(this.state, (v, k) => this.updateValue.bind(this, k));
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateValue(stateProperty, e) {
        console.log(`[UPDATE - ${stateProperty}]`, e.target.value);
        this.setState({
            [stateProperty]: e.target.value
        });
    }

    isFormValid() {
        return !_(this.state).values().some(_.isEmpty);
    }

    handleSubmit(e) {
        console.log('Submitting:');
        console.log(this.state, null, 2);
        this.resetState();
        e.preventDefault();
    }

    resetState() {
        this.setState(this.getFreshState());
    }

    getFreshState() {
        return {
            name: '',
            lastName: '',
            country: '',
            city: '',
            street: '',
            zipCode: '',
            email: ''
        };
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <FormRow>
                <label htmlFor="firstName">Name:<MandatoryInput id="firstName" onChange={this.updaters.name} value={this.state.name} /></label>
                <label htmlFor="lastName">Surname:<MandatoryInput id="lastName" onChange={this.updaters.lastName} value={this.state.lastName}/></label>
            </FormRow>
            <FormRow>
                <label htmlFor="country">Country:
                    <select id="country" value={this.state.country} onChange={this.updaters.country}>
                        {_.map(_.keys(Countries), co => <option key={co} value={co}>{co}</option>)}
                    </select>
                </label>
                <label htmlFor="city">City:
                    <select id="city" onChange={this.updaters.city} value={this.state.city}>
                        {_.map(Countries[this.state.country], ct => <option key={ct} value={ct}>{ct}</option>)}
                    </select>
                </label>
            </FormRow>
            <FormRow>
                <label htmlFor="street">Street:<MandatoryInput id="street" onChange={this.updaters.street} value={this.state.street} /></label>
                <label htmlFor="zipCode">ZIP Code:<MandatoryInput id="zipCode" onChange={this.updaters.zipCode} value={this.state.zipCode} /></label>
            </FormRow>
            <FormRow>
                <label htmlFor="email">e-mail:<MandatoryInput type="email" id="email" onChange={this.updaters.email} value={this.state.email} /></label>
            </FormRow>
            <FormRow>
                <button disabled={!this.isFormValid()}>Submit</button>
            </FormRow>
        </form>
    }
}

export default AddressForm;