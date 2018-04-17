import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
      {console.log("it worked kinda")}
        <header className="App-header">
        </header>
        <Weather />
        <Footer />
      </div>
    );
  }
}

export default App;
