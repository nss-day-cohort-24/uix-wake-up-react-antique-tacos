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
                <h3 onClick={this.toggle} >Books</h3>
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