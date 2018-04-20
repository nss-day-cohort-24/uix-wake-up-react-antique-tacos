import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import News from './News';


class NewsCollapse extends Component {
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
                <h3 onClick={this.toggle} >News</h3>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <News />
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default NewsCollapse;