import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Weather from './Weather';
import { rebase } from './base.js';



class WeatherCollapse extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
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

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
                <div>
                    <h3 onClick={this.toggle} >Weather</h3>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <Weather
                                uid={this.state.uid} />
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
        );
    }
}

export default WeatherCollapse;