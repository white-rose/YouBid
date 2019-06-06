import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const numbers = ["Macbook Pro Bid", "Apple IPhoneXs Bid"];
  const listItems = numbers.map((item) =>
    <li>{item}</li>
  );

  function bidItem(e) {
    e.preventDefault();
    console.log('You want to bid for ');
  }

  return (
    <div className="App">
      <header className="App-header">
        YouBid
      </header>
      <h1> Available Items </h1>
      <body>
          <p> How it works:
          We are trying to bring more power to the consumer to be able to dictact the price.
          The idea is real simple, you bid for the most popular items and we use our network to land that price with the consumer.
          Once the producer accepts the bid we ship the item to your address/
           </p>
          <ul>{listItems}</ul>
      </body>
      <a href="#" onClick={bidItem}>
        Bid
      </a>
    </div>
  );
}

export default App;
