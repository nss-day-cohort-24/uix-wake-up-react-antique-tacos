import React, { Component } from 'react';


class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            newsLoaded: false,
            quoteResult: {},
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
                    quoteLoaded : true,
                    quoteResult : result
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
        const { error, quoteLoaded, quoteResult } = this.state;

        if (error) {
        return( 
            <div>
                Error: {error.message}
            </div>
        )
        } 
        else if (!quoteLoaded) { 
        return ( 
            <div className="text-center">
            Loading...
            </div>
        )
        } else {
        return(
        <div>
        <QuoteOutPut
        quote={quoteResult.Quote.contents.quotes[0].quote}
        author={quoteResult.Quote.contents.quotes[0].author}
        background={quoteResult.Quote.contents.quotes[0].background} />
        </div>
            )
        }
    }
}

export default Quote;