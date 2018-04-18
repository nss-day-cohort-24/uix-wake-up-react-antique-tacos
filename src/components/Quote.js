import React, { Component } from 'react';


class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            newsLoaded: false,
            objResult: {},
            showResult: false,
        }
    }
    componentDidMount() {
        this.getQuote()
    }
    getQuote(){
        fetch(`http://quotes.rest/qod.json?category=inspire`)
        .then(data => data.json())
        .then(
            (result) => {
                console.log("Quote: ", result);
                this.setState({
                    quoteLoaded = true,
                    objResult = result
                });
            },
        )
    }

}