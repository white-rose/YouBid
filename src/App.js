import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CreateAccountComponent from './CreateAccountComponent'
import { RegisterPage } from './RegisterPage/RegisterPage'
import Items from './Items'
import Main from './Main'
import logo from './logo.svg'
import './App.css'

function App() {

  const itemsForSale = [
    <a href="#" onClick={bidItem}> Macbook Pro </a>,
    <a href="#" onClick={bidItem}> Apple IPhoneXs </a>
    ];

  const items = itemsForSale.map((item) =>
    <li>{item}</li>
  );

  function createAccount() {
    return new CreateAccountComponent();
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

       <Route exact path="/" component={Main} />
       <Route path="/createAccount/" component={createAccount} />
       <Route path="/register/" component={RegisterPage} />
     </div>
   </Router>
  );
}

export default App;
