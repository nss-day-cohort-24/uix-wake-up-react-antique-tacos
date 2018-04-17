import React, { Component } from 'react';




let NewsOutPut = (props) => {
    return(
        <div className="text-center">
            <h1>News</h1>
            <p>"{props.title}" <br />from {props.name}</p>
            <p>Read the full story <a href={props.url}>HERE</a></p>

        </div>
    )
}



class News extends React.Component {

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
        this.getNews()
    }

  



    getNews() {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a0bd7fade30a4dc49001d3f4382fe2ea`)
        .then(data => data.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    newsLoaded: true,
                    objResult: result,
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
        const { error, newsLoaded, objResult,showResult, value } = this.state;

        if (error) {
        return( 
            <div>
                Error: {error.message}
            </div>
        )
        } 
        else if (!newsLoaded) { 
        return ( 
            <div className="text-center">
            Loading...
            </div>
        )
        } else {
        return(
        <div>
            <NewsOutPut
            name={objResult.articles[0].source.name}
            title={objResult.articles[0].title}
            url={objResult.articles[0].url} />
        </div>
            )
        }
    }
}

export default News;