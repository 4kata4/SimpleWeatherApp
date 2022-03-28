import { GoogleApiWrapper } from 'google-maps-react';
import React, { useState} from 'react';
import Conditions from './Conditions';
import { MapContainer } from './Map';
import { Map } from 'google-maps-react';
import './Styles.css'
const Forecast = (props) => {
    let [city, setCity] = useState('')
    let [unit, setUnit] = useState('imperial')
    const uriEncodedCity = encodeURIComponent(city);
    let [responseObj, setResponseObj] = useState({})
    function getForecast(e) {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': 'ae6434c7d8mshe83ce531f4c8b76p189eeajsn86d60b04c565'
            }
        };
        
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, options)
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
              
        })
        }

        

    return (
        <div>
            <h2> Find Current Weather </h2>
            <div class="flex-container"> 
            <form onSubmit={getForecast}>
                <input class="inputbox flex-item:nth-child(1)"
                type="text"
                placeholder="Enter City"
                maxLength="50"
                value={city}
                onChange={(e) => setCity(e.target.value)} />
                <br /> 
                <div class="flex-item:nth-child(2)"> 
                <label> 
                    <input
                    type="radio"
                    name="units"
                    checked={unit === "imperial"}
                    value="imperial"
                    onChange={(e) => setUnit(e.target.value)} />
                    Fahrenheit
                </label>
                <label>
                    <input
                    type="radio"
                    name="units"
                    checked={unit === "metric"}
                    value="metric"
                    onChange={(e) => setUnit(e.target.value)} />
                    Celcius
                </label>
                </div>
                <button type="submit" class="flex-item:nth-child(3)"> Submit </button>
            </form>
            <Conditions 
            responseObj={responseObj} />
             </div>
        </div>

    ) 
}
export default Forecast