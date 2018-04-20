import React, { Component } from 'react';
import { loginWithGoogle, logout  } from './auth';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import { rebase } from './base.js';
 

class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {
            authed: false,
            loading: true,
            uid: null,
            zip: '',
          }

          this.authenticate = this.authenticate.bind(this);
          this.logoutApp = this.logoutApp.bind(this);

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

      componentWillUnmount () {
        console.log("componentWillUnmount");
        this.authListener();
      }

      authenticate(){
        console.log('App: calling autheticate for google');
        loginWithGoogle()
        .then(() => {
            this.setState({
                authed: true
            });
        });
      }

      logoutApp(){
        console.log('App: calling logoutApp');
        logout();
      }

    render() {
        return(
            <BrowserRouter>
            {this.state.authed
                ?                       

                <App />

                : 

                <div className="container">
                    <div className="d-flex flex-column justify-content-center text-center">
                        <h1> Google Login</h1>
                        <button type="button" onClick={() => this.authenticate('google')} className="login-btn btn btn-secondary btn-lg">Login</button>
                    </div>
                </div>
            }
            </BrowserRouter>
        )
    }
}

export default Login;