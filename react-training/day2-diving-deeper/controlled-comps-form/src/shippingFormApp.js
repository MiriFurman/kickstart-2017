import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

class ShippingFormApp extends Component {

  constructor(props) {
    super(props);
    this.state = this.getResetState();
  }

  getResetState() {
    return {
      form : {
        name: '',
        surname: '',
        country: '',
        city: '',
        street: '',
        zip: '',
        email: ''
      },
      submitEnabled : false
    }
  }

  isFormValid() {
    return !_(this.state.form).values().some(_.isEmpty);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const validForm = this.isFormValid();
    this.state.form[name] = value;
    this.setState({
        form : this.state.form,
        submitEnabled: validForm
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.form);
    this.setState(this.getResetState());
  }


  render() {
    return (
      <form>
        <div className="form-row">
          <div>
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" value={this.state.form.name} onChange={(e) => this.handleInputChange(e)}/>
          </div>
          <div>
            <label for="surname">Surname: </label>
            <input type="text" id="surname" name="surname" value={this.state.form.surname} onChange={(e) => this.handleInputChange(e)}/>
          </div>
        </div>
        <div className="form-row">
          <div>
            <label for="country">Country: </label>
            <select id="country" name="country" value={this.state.form.country} onChange={(e) => this.handleInputChange(e)}>
              <option disabled selected value=""> -- select an option -- </option>
              <option value="Israel">Israel</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div>
            <label for="city">City: </label>
            <input type="text" id="city" name="city" value={this.state.form.city} onChange={(e) => this.handleInputChange(e)}/>
          </div>
        </div>
        <div className="form-row">
          <div>
            <label for="street">Street: </label>
            <input type="text" id="street" name="street" value={this.state.form.street} onChange={(e) => this.handleInputChange(e)}/>
          </div>
          <div>
            <label for="zip">ZIP Code: </label>
            <input type="text" id="zip" name="zip" value={this.state.form.zip} onChange={(e) => this.handleInputChange(e)}/>
          </div>
        </div>
        <div className="form-row">
          <div>
            <label for="email">E-mail: </label>
            <input type="email" id="email" name="email" value={this.state.form.email} onChange={(e) => this.handleInputChange(e)}/>
          </div>
        </div>
        <div className="form-row">
          <button type="submit" onClick={(e) => this.handleSubmit(e)} disabled={!this.state.submitEnabled}>Submit</button>
        </div>
      </form>
    );
  }
}

export default ShippingFormApp;
