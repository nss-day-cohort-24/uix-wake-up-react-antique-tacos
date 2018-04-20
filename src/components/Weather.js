import React from 'react';
import { saveZip } from './auth.js';
import './weather.css';
import './app.css';



// function WeatherInPut(props) {
//     return(
//         <div className="container d-flex justify-content-center input-group input-group-sm mb-5 w-25">
//             <span>
//                 <input id="input-field" type="text" className="w-50-lg w-100-sm form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"  /> 
//             </span>
            
        
//         {props.showResult ?
//             <div> </div>
//             :
//             <div className="input-group-prepend">
//                 <span className="input-group-text" id="inputGroup-sizing-sm" onClick={() => { props.showClicked(props.uid) }}>Enter
//                 </span>
                
//             </div>
            
//         }                
//         </div>      
//     )
// }




function WeatherOutPut (props) {
    if(props.weatherLoaded) {
        let temp = props.temp;
        let tempRounded = Math.round(temp);
        return (
            <div>
                <h1 id="componentHed">WEATHER</h1>

                    <h2 className ="col-6">{props.name}</h2>
                    <div className='d-flex mb-5'>
                        <input id="input-field" type="text" className="w-50-lg w-100-sm form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"  /> 
    
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm" onClick={() => { props.showClicked(props.uid) }}>Enter
                            </span>
                        </div>
                    </div>
                    <h1 id="temp" className ="col-6">{tempRounded}&#8457;</h1>
                    <h2 className ="col-6">{props.weather}</h2>
                
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
    componentDidMount() {
        this.getWeather(37206);
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
        const { error, weatherLoaded, objResult,showResult } = this.state;

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
                Loading...
            </div>
        )
        } else if(weatherLoaded) {
        return(
        <div>
            <WeatherOutPut
            weatherLoaded={weatherLoaded}
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