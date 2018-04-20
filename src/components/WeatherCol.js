import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Weather from './Weather';


class WeatherCollapse extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
                <div>
                    <h1 id="componentHed" onClick={this.toggle}>WEATHER</h1>
                    <Weather />
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody className ="pb-0">
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
        );
    }
}

export default WeatherCollapse;