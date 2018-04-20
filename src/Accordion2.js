import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import Weather from './Weather';
import News from './News';


class Accordion2 extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.renderCards = this.renderCards.bind(this);
        this.state = { collapse: 0, cards: [<News />, <Weather />] };
    }

    toggle(key) {
        console.log("key", key);
        // let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(key) ? 0 : Number(event) });
    }
    renderCards(key) {
        const { cards, collapse } = this.state;
        return (
            <Card style={{ marginBottom: '1rem' }} key={key}>
                <CardHeader data-event={key} onClick={(e) => { this.toggle(key) }}>Header</CardHeader>

                <Collapse isOpen={collapse === key}>
                    <CardBody>
                        {cards[key]}
                    </CardBody>
                </Collapse>
            </Card>
        )
    }

    render() {
        const { cards } = this.state;
        return (
            <div className="container">
                <h3 className="page-header">My Stuff</h3>
                {Object.keys(cards).map(this.renderCards)}
            </div>
        )
    }
}

export default Accordion2;