import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Weather from './Weather';
import News from './News';
import Quote from './Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
      {console.log("it worked kinda")}
        <header className="App-header">
        </header>
        <Quote />
        <Weather />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
