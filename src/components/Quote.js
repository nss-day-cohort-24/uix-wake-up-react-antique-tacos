import React, { Component } from 'react';
import './quote.css';
import './app.css';

let QuoteOutPut = (props) => {
    return(
        <div className="d-flex justify-content-center">
            <div className="card">
                <div id="quoteDiv" className="card-body">
                    <p id="quote" className=" col-12">"{props.quote}"</p>
                    <p id="quoteAuthor" className=" card-text">-{props.author}</p>
                </div>
            </div>
        </div>
    )
}
class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            quoteLoaded: false,
            quoteResult: {},
            showResult: false,
        }
    }
    componentDidMount() {
        this.getQuote()
    }
    getQuote(){
        fetch(`http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&key=<10>`)
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
            Loading....
            </div>
        )
        } else {
        return(
        <div>
        <QuoteOutPut
        quote={quoteResult.quoteText}
        author={quoteResult.quoteAuthor} />
        </div>
            )
        }
    }
}

export default Quote;