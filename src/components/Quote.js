import React, { Component } from 'react';

let QuoteOutPut = (props) => {
    return(
        <div className="d-flex justify-content-center">
            <div className="card" style={{width: 18 + 'rem'}}>
                <img className="card-img-top" src={props.image} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">"{props.quote}"</h5>
                    <p className="card-text">-{props.author}</p>
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
        fetch(`http://quotes.rest/qod.json?category=inspire&maxlength=25`)
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
        quote={quoteResult.contents.quotes[0].quote}
        author={quoteResult.contents.quotes[0].author}
        background={quoteResult.contents.quotes[0].background} />
        </div>
            )
        }
    }
}

export default Quote;