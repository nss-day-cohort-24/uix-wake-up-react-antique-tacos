import React, { Component } from 'react';

class Weather extends Component {
    constructor() {
        super();

        this.state = {
            weatherLoaded: false,
            ObjResult: {},
            showResult: false,
            error: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getWeather();
        // }
        // componentDidMount() {
        //     this.getWeather()
    }

    getWeather() {
        console.log('getWeather');
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.value},us&appid=7c6212572dc00aca5008de2575471183&units=imperial`)
            .then(res => res.json())
            .then(
                (result) => {
                    //                         console.log("get weather result: ", result);
                    this.setState({ weatherLoaded: true, temperature: result.main.temp, city: result.name, value: '' });
                    //                         console.log(result.name);
                }, (error) => {
                    console.log('get weather error: ', error);
                }
            );
        //                 },
        //                 (error) => {
        //                 console.log('get weather error: ', error);
    }
    // }
    // }
    render() {
        return (<div className="weather">
            <h2>Current Weather</h2>
            <form className="form" onSubmit={this.handleSubmit}>

                <input className="weather-input" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Insert your Zip-Code"></input>
                <button className="submit-btn btn" type="submit">Submit</button>
                <span>To see your current weather</span><br />
            </form>
            <div className="temp-render">
                <div>
                    <h3>{this.state.city}</h3>
                    <h3>{this.state.temperature}&#176;F</h3>
                </div>
            </div>
        </div>
        )
    }
}
export default Weather;