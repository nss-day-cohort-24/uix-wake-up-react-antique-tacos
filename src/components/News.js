import React, { Component } from 'react';
import './app.css';
import './news.css';




let NewsOutPut = (props) => {
    return(
        <div className="d-flex justify-content-center">
            <div className="card">
                <h1 id="componentHed">NEWS</h1>
                <div id="newsDiv">
                    <div id="imageContainer">
                        <div id="imageOverlay">
                        <img id="newsImage" className="card-img-top" src={props.image} alt=""/>
                    </div>
                </div>
                <div id="newsInfo" className="card-body">
                        <h2 id="newsTitle" className="card-title">"{props.title}"</h2>
                        <p id ="newsSource" className="card-text">{props.name}</p>
                        {/* <a id ="storyButton" href={props.url} className="btn btn-primary">Full Story</a> */}
                </div>
                </div>
            </div>
        </div>
    )
}



class News extends Component {

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
        const { error, newsLoaded, objResult } = this.state;

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
            url={objResult.articles[0].url}
            image={objResult.articles[0].urlToImage} />
        </div>
            )
        }
    }
}

export default News;