import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Items from './Items';
// import CheckboxContainer from './CheckboxContainer';
import FlavorForm from './FlavorForm';

class Main extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
          <body>
              <h2> Mission </h2>
              <p>
              We are trying to bring more power to the consumer to be able to dictact the price.
              The idea is real simple, you bid for the most popular items and we use our network to land that price with the consumer.
              Once the producer accepts the bid we ship the item to your address.
              </p>

              <h1> How it works </h1>
              <h2> Step 1: Create account </h2>
              <Link to="/createAccount/">Create Account</Link>
              <h2> Step 2: Make bid </h2>
              Venmo: @Nathan-Nguyen-11
              Venmo is used to avoid transaction fees and save you money.
              <h2> Step 3: If buyer accepts price wait item will get shipped to your address </h2>
              <h1> Available Items </h1>
              <FlavorForm> </FlavorForm>
          </body>
        );
    }
}

export default Main;
