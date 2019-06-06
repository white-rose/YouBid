import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import './CreateAccount.js'

function App() {

  const itemsForSale = [
    <a href="#" onClick={bidItem}> Macbook Pro </a>,
    <a href="#" onClick={bidItem}> Apple IPhoneXs </a>
    ];

  const items = itemsForSale.map((item) =>
    <li>{item}</li>
  );

  function createAccount() {
    return <h2> Create Account </h2>;
  }

  function bidItem(e) {
    e.preventDefault();
    console.log('You want to bid for ');
  }

  return (

    <Router>
        <div className="App">
          <header className="App-header">
            YouBid
          </header>
          <body>
              <h2> Step 1: Create account </h2>
              <Link to="/createAccount/">Create Account</Link>
              <h2> Step 2: Bid for item </h2>
              <h2> Step 3: If buyer accepts price wait for package to get shipped to address </h2>

              <p> How it works:
              We are trying to bring more power to the consumer to be able to dictact the price.
              The idea is real simple, you bid for the most popular items and we use our network to land that price with the consumer.
              Once the producer accepts the bid we ship the item to your address/
               </p>

              <h1> Available Items </h1>
              <ul>{items}</ul>
          </body>
       <Route path="/createAccount/" component={createAccount} />
     </div>
   </Router>


  );
}

export default App;
