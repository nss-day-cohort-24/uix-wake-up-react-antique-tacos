import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Weather from './Weather';
import News from './News';
import Logout from './LogoutBtn';

class App extends Component {
  render() {
    return (
      <div className="App">
      {console.log("it worked kinda")}
        <header className="App-header">
        </header>
        <Logout />
        <Weather />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
