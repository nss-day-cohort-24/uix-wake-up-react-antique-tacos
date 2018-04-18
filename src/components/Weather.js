import React from 'react';
import { saveZip } from './auth.js';



function WeatherInPut(props) {
    return(
        <div className="container d-flex justify-content-center input-group input-group-sm mb-5 w-25">
            <span>
                <input id="input-field" type="text" className="w-50-lg w-100-sm form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"  /> 
            </span>
            
        
        {props.showResult ?
            <div> </div>
            :
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm" onClick={() => { props.showClicked(props.uid) }}>Enter
                </span>
                
            </div>
            
        }                
        </div>      
    )
}




function WeatherOutPut (props) {
    if(props.showResult) {
        return (
            <div className="container text-center">
                <h4>Temperature for your area:</h4>
                <p key={props.name}>
                    {props.name}: {props.temp}<br />
                    {props.weather}
                </p>
                <div className='d-flex justify-content-center mb-5'>
                    <input id="input-field" type="text" className="w-50-lg w-100-sm form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"  /> 

                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm" onClick={() => { props.showClicked(props.uid) }}>Enter
                        </span>
                    </div>
                </div>
            </div>
        )
    }else {
        return null;
    }
} 




class Weather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            weatherLoaded: false,
            objResult: {},
            showResult: false,
            value:'',
            uid:this.props.uid
        }
        

        this.showClicked = this.showClicked.bind(this);
    }

    showClicked(uid) {
        let val = document.getElementById('input-field').value
        saveZip(uid, val);
        this.setState({
            value: val,
            showResult:true
        }, this.getWeather(val))
    }

  



    getWeather(value) {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${value},us&units=imperial&APPID=aeace81c0d72e15b17ad94207544e2f8`)
        .then(data => data.json())
        .then(
            (result) => {
                console.log('result', result);
                this.setState({
                    weatherLoaded: true,
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
        const { error, weatherLoaded, objResult,showResult, value } = this.state;

        if (error) {
        return( 
            <div>
                Error: {error.message}
            </div>
        )
        } 
        else if (!weatherLoaded) { 
        return ( 
            <div className="text-center">
            <WeatherInPut
            weatherLoaded={weatherLoaded}
            showClicked={this.showClicked}
            value={value} 
            uid={this.props.uid}/>
            </div>
        )
        } else {
        return(
        <div>
            <WeatherOutPut
            showResult={showResult}
            name={objResult.city.name}
            temp={objResult.list[0].main.temp}
            showClicked={this.showClicked} 
            uid={this.props.uid} 
            weather={objResult.list[0].weather[0].description} />

        </div>
            )
        }
    }
}

export default Weather;