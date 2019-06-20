import React, { Component } from 'react';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your item:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Macbook Pro">Macbook Pro</option>
            <option value="iPhoneX">iPhoneX</option>
          </select>
        </label>
        <input type="text" name="Bid"/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;
