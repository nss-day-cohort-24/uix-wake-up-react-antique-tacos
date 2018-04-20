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
                    <h3 onClick={this.toggle} >Weather</h3>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <Weather />
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
        );
    }
}

export default WeatherCollapse;