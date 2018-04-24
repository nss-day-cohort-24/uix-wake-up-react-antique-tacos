import React, { Component } from 'react';
import './app.css';
import { saveUser } from './auth.js';

let UserOutput = (props) => {
    return(
        <div className="d-flex justify-content-between">
            <div className="row">
                <p  className="col-3">Hello, </p>
                <image className="col-6" src={props.image} alt="Your Picture" />
                <p  className="col-3">{props.name}</p>
            </div>
        </div>
    )
}

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            userLoaded: false,
            userResult: {},
            showResult: false,
        }
    }
    componentDidMount() {
        this.getUser()
    }
    getUser(user){
        fetch(`https://antique-taco-group-project.firebaseio.com/users/${user.uid}`)
        .then(data => data.json())
        .then(
            (result) => {
                this.setState({
                    userLoaded : true,
                    userResult : result
                });
            },
            (error) => {
                this.state ({
                    showResult:true,
                    error: error,
                });
            })
        }
    render() {
        const { error, userLoaded, userResult } = this.state;

        if (error) {
        return( 
            <div>
                Error: {error.message}
            </div>
        )
        } 
        else if (!userLoaded) { 
        return ( 
            <div className="text-center">
            Loading....
            </div>
        )
        } else {
        return(
        <div>
        <UserOutput
        name={user.name}
        image={user.image} />
        </div>
            )
        }
    }
}