import React, { Component } from 'react';
import Footer from './Footer';
import Weather from './Weather';
import News from './News';
import Logout from './LogoutBtn';
import { rebase } from './base.js';
import WeatherCollapse from './WeatherCol';
import NewsCollapse from './NewsCol';
import BooksCollapse from './BooksCol';
import Quote from './Quote';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        authed: false,
        loading: true,
        uid: null,
        zip: '',
      }

}

componentDidMount () {
    console.log("componentDidMount");
    this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) =>{
  
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          uid: user.uid,
        });
        //get DB stuff for user here
      } else {
        this.setState({
          authed: false,
          loading: false,
          uid: null,
        })
      }
    })
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Logout />
        <Quote />
        <WeatherCollapse />
        <NewsCollapse />
        <BooksCollapse />
        <Footer />
      </div>
    );
  }
}

export default App;
