import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Weather from './Weather';
import News from './News';
import Quote from './Quote';
import Logout from './LogoutBtn';

class App extends Component {
  render() {
    return (
      <div className="App">
      {console.log("it worked kinda")}
        <header className="App-header">
        </header>
        <Quote />
        <Logout />
        <Weather />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
