import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


class BooksCollapse extends Component {
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
                <h1 id="componentHed" onClick={this.toggle}>BOOKS</h1>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            Books
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default BooksCollapse;