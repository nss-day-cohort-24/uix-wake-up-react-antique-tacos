import React, { Component } from 'react';
import { rebase } from './base.js';
import Logout from './LogoutBtn';
import User from './User';
import Quote from './Quote';
import WeatherCollapse from './WeatherCol';
import NewsCollapse from './NewsCol';
import BooksCollapse from './BooksCol';
import Footer from './Footer';

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
